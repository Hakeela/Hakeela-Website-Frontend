import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

if (!getApps().length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  throw new Error("Missing FIREBASE_SERVICE_ACCOUNT env variable");
}
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

export default async function handler(req, res) {
  try {
    const { token, uid } = req.query;

    if (!token || !uid) {
      return res.status(400).send("Invalid verification link");
    }

    const docRef = db.collection("emailVerifications").doc(uid);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(400).send("Invalid or expired link");
    }

    const data = doc.data();

    if (data.verified) {
      return res.status(200).send("Email already verified");
    }

    if (data.token !== token || Date.now() > data.expiresAt) {
      return res.status(400).send("Invalid or expired link");
    }

    // Mark email as verified
    await docRef.update({
      verified: true,
      verifiedAt: new Date(),
    });

    // OPTIONAL: update user record
    await db.collection("users").doc(uid).update({
      emailVerified: true,
    });

    return res.status(200).send("Email verified successfully 🎉");
  } catch (err) {
    console.error("Verify email error:", err);
    return res.status(500).send("Verification failed");
  }
}
