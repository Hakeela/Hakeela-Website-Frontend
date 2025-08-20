import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import sendgrid from "@sendgrid/mail";

// Init Firebase Admin
let app;
if (!getApps().length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  app = initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// Init SendGrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP in Firestore with 10-min expiry
    await db.collection("passwordResets").doc(email).set({
      otp,
      createdAt: new Date(),
      expiresAt: Date.now() + 10 * 60 * 1000,
    });

    // Send email
    await sendgrid.send({
      to: email,
      from: "no-reply@yourdomain.com", // Must be verified in SendGrid
      subject: "Your Password Reset Code",
      text: `Your OTP code is ${otp}. It expires in 10 minutes.`,
    });

    res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    console.error("Send OTP error:", err);
    res.status(500).json({ error: "Failed to send OTP" });
  }
}
