import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
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
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP in Firestore (10 min expiry)
    await db.collection("passwordResets").doc(email).set({
      otp,
      createdAt: new Date(),
      expiresAt: Date.now() + 10 * 60 * 1000,
    });

    // Send OTP email
    const [response] = await sendgrid.send({
      to: email,
      from: "hello.wgdtafrica@gmail.com", // MUST be verified in SendGrid
      subject: "Your Password Reset Code",
      text: `Your OTP code is ${otp}. It expires in 10 minutes.`,
    });

    console.log("SendGrid status:", response.statusCode);
    console.log("SendGrid headers:", response.headers);

    return res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    console.error("Send OTP error:", err);
    return res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
}
