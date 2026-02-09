import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import type { JSX } from "react/jsx-dev-runtime";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [user, loading] = useAuthState(auth);
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const checkVerification = async () => {
      if (!user) return setVerified(false);

      // Prefer the Auth user's emailVerified flag; fall back to Firestore flag if missing
      const authVerified = (user as any).emailVerified === true;
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const firestoreVerified = userDoc.exists() && userDoc.data()?.emailVerified === true;
        setVerified(authVerified || firestoreVerified);
      } catch (err) {
        console.error("Error reading user doc for verification check:", err);
        setVerified(authVerified);
      }
    };

    checkVerification();
  }, [user]);

  if (loading || verified === null) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!verified) {
    return <Navigate to="/check-your-email" replace />;
  }

  return children;
}
