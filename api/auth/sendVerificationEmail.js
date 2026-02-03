import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import crypto from "crypto";
import sendgrid from "@sendgrid/mail";


// Init Firebase Admin
if (!getApps().length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// Init SendGrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  console.log("APP_URL:", process.env.APP_URL);
  console.log("🔥 sendVerificationEmail API hit");
  console.log("Body:", req.body);

  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const { email, userId } = req.body;
    if (!email || !userId) {
      return res.status(400).json({ success: false, message: "Email and userId are required" });
    }

    // Generate secure verification token
    const token = crypto.randomBytes(32).toString("hex");

    // Save token in Firestore (24h expiry)
    await db.collection("emailVerifications").doc(userId).set({
      email,
      token,
      createdAt: new Date(),
      expiresAt: Date.now() + 24 * 60 * 60 * 1000,
      verified: false,
    });

    const verifyUrl = `${process.env.APP_URL}/verify-email?token=${token}&uid=${userId}`;

    // Send verification email
    const [response] = await sendgrid.send({
      to: email,
      from: "hello.wgdtafrica@gmail.com", // verified sender
      subject: "Confirm your email address",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Welcome to WGDT Africa 🎉</h2>
          <p>Thanks for signing up! Please confirm your email address by clicking the button below.</p>

          <a href="${verifyUrl}"
             style="display:inline-block;margin-top:20px;padding:12px 20px;
                    background:#2563eb;color:#fff;text-decoration:none;border-radius:6px;">
            Verify Email
          </a>

          <p style="margin-top:20px;font-size:12px;color:#555;">
            This link expires in 24 hours. If you didn’t create an account, you can ignore this email.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Verification email sent" });
  } catch (err) {
    console.error("Verification email error:", err);
    return res.status(500).json({ success: false, message: "Failed to send verification email" });
  }
}

