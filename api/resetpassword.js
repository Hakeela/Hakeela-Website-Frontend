import admin from "firebase-admin";

// Init Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)),
  });
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    // Find user
    const user = await admin.auth().getUserByEmail(email);

    // Update password
    await admin.auth().updateUser(user.uid, { password });

    return res.status(200).json({ success: true, message: "Password updated successfully" });
  } catch (err) {
    console.error("Reset password error:", err);
    return res.status(500).json({ success: false, message: err.message || "Failed to reset password" });
  }
}
