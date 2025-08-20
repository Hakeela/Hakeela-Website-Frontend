import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Init Firebase Admin
if (!getApps().length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: "Email and OTP are required" });
    }

    const doc = await db.collection("passwordResets").doc(email).get();
    if (!doc.exists) {
      return res.status(400).json({ success: false, message: "OTP not found" });
    }

    const data = doc.data();
    if (data.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    if (Date.now() > data.expiresAt) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    return res.status(200).json({ success: true, message: "OTP verified" });
  } catch (err) {
    console.error("Verify OTP error:", err);
    return res.status(500).json({ success: false, message: "Failed to verify OTP" });
  }
}
