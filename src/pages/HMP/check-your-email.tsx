import { useEffect, useState } from "react";
import "./styles/check-your-email.css";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function CheckYourEmail() {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
  const interval = setInterval(async () => {
    const user = auth.currentUser;
    if (!user) return;

    await user.reload(); 

    if (user.emailVerified) {
      clearInterval(interval);
      navigate("/dashboard");
    } else {
      setChecking(false);
    }
  }, 4000);

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

    <button
      onClick={async () => {
        const user = auth.currentUser;
        if (!user) return;

        await user.reload();

        if (user.emailVerified) {
          navigate("/dashboard");
        } else {
          alert("Your email is still not verified.");
        }
      }}
      style={{ marginTop: "20px" }}
    >
      I've Verified My Email
    </button>
  </div>
  );
}
