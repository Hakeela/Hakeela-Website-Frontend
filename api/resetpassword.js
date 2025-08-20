// api/reset-password.js
import admin from "firebase-admin";

// Ensure Firebase Admin is initialized once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)),
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Find user by email
    const user = await admin.auth().getUserByEmail(email);

    // Update password
    await admin.auth().updateUser(user.uid, { password });

    return res.status(200).json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).json({ error: error.message });
  }
}
