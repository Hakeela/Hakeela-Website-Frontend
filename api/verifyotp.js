import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let app;
if (!getApps().length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  app = initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ error: "Email and OTP are required" });
  }

  try {
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

    res.status(200).json({ success: true, message: "OTP verified" });
  } catch (err) {
    console.error("Verify OTP error:", err);
    res.status(500).json({ error: "Failed to verify OTP" });
  }
}
