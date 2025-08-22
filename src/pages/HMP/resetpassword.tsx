import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "react-phone-number-input/style.css";
import "./styles/signup.css";

export default function ResetPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Utility: safely parse JSON
  const safeJson = async (res: Response) => {
    try {
      if (res.headers.get("content-type")?.includes("application/json")) {
        return await res.json();
      }
      return {};
    } catch {
      return {};
    }
  };

  // Call API to send OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendotp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await safeJson(res);
      if (res.ok && data.success) {
        setStep(2);
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Network error while sending OTP");
    }
  };

  // Call API to verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/verifyotp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await safeJson(res);
      if (res.ok && data.success) {
        setStep(3);
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Network error while verifying OTP");
    }
  };

  // Call API to reset password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/resetpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await safeJson(res);
      if (res.ok && data.success) {
        alert("Password reset successful! You can now log in.");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        alert(data.message || "Failed to reset password");
      }
    } catch (err) {
      console.error(err);
      alert("Network error while resetting password");
    }
  };

  return (
    <div className="signupage">
      <div className="leftsign">
        <form
          className="form-container"
          onSubmit={
            step === 1
              ? handleSendOtp
              : step === 2
              ? handleVerifyOtp
              : handleResetPassword
          }
        >
          <Link
            to="/login"
            style={{ color: "rgba(0, 0, 184, 1)", textDecoration: "none" }}
          >
            ← Back
          </Link>

          {step === 1 && (
            <>
              <h1>Reset your password</h1>
              <p>
                Kindly enter the email address associated with your
                <br /> account to reset your password
              </p>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-button">
                Send OTP code
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h1>Enter OTP</h1>
              <p>We have sent a 6-digit code to {email}</p>
              <label>OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="submit" className="submit-button">
                Verify OTP
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h1>Set New Password</h1>
              <p>Enter a strong new password for your account</p>
              <label>New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="submit-button">
                Reset Password
              </button>
            </>
          )}
        </form>
      </div>

      <div className="rightsign">
        <div className="rightcontent">
          <img src="/Hakeela Logo Icon (white) 1.png" alt="" />
          <h1>
            Empowering
            <br /> the Next
            <br /> Generation of
            <br /> Creators and
            <br /> Innovators
          </h1>
          <p>
            At Hakeela, we equip students with practical
            <br /> digital skills to turn ideas into impact. From
            <br /> coding to design, our expert-led courses help
            <br /> you learn fast, build real projects, and thrive in
            <br /> the digital world.
          </p>
          <button>Join the Community ➜</button>
        </div>
      </div>
    </div>
  );
}
