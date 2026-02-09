import { useEffect, useState } from "react";
import "./styles/check-your-email.css";
import { auth } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function CheckYourEmail() {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      const user = auth.currentUser;
      if (!user) return;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      if (userData?.emailVerified) {
        clearInterval(interval);
        navigate("/dashboard");
      } else {
        setChecking(false);
      }
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="check-email">
      <h1>Check your email 📧</h1>
      <p>
        We sent you a verification link.
        <br />
        Please click it to continue.
      </p>

      {checking && <p>Waiting for verification...</p>}
    </div>
  );
}
