import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import './styles/signup.css';
import { logIn, logOut, resendVerificationEmail} from "../../firebase/authService";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
    // 1️⃣ Log user in
    const user = await logIn(email, password);

    // 2️⃣ Get user profile from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.data();

    if (!userData?.emailVerified) {
      // 🔁 Resend verification email automatically
      await resendVerificationEmail(user);

      // Log user out
      await logOut();

      alert(
        "Your email is not verified yet. " +
        "We’ve resent a verification email. Please check your inbox."
      );
      navigate("/check-your-email");
      return;
    }

    // 4️⃣ Verified → allow access
    navigate("/dashboard");
  } catch (error: unknown) {
    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("An unknown error occurred.");
    }
  } finally {
    setLoading(false);
  }
  };

  const isButtonDisabled = !email || !password || loading;

  return (
    <div className="signupage">
      <div className="leftsign">
        <form className="form-container" onSubmit={handleLogin}>
          <Link to="/signup" style={{ color: 'rgba(0, 0, 184, 1)', textDecoration: 'none' }}>← Back</Link>
          <h1>Log into your Account</h1>
          <p>Login to continue your learning experience</p>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div className="password-input">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="icon"
              style={{ cursor: "pointer" }}
            >
              {passwordVisible ? <Eye className="grey-icon" /> : <EyeOff className="grey-icon" />}
            </span>
          </div>

          <Link className="reset" to='/resetpassword'>Reset Password</Link>

          <button
            type="submit"
            className="submit-button"
            disabled={isButtonDisabled}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p id="login-text">
            Don't have an account? <Link to="/signup">Create an Account</Link>
          </p>
        </form>
      </div>

      <div className="rightsign">
        <div className="rightcontent">
          <img src="/Hakeela Logo Icon (white) 1.png" alt="" />
          <h1>Empowering<br />the Next<br />Generation of<br />Creators and<br />Innovators</h1>
          <p>At Hakeela, we equip students with practical<br />digital skills to turn ideas into impact. From<br />coding to design, our expert-led courses help<br />you learn fast, build real projects, and thrive in<br />the digital world.</p>
          <button>Join the Community ➜</button>
        </div>
      </div>
    </div>
  );
}
