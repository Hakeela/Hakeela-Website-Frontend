import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import './styles/signup.css';
import { signUp } from "../../firebase/authService";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  try {
    await signUp(email, password, {
      fullName,
      gender,
      phoneNumber,
      referralSource,
    });
    navigate("/dashboard");
  } catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Signup failed:", error.message);
        alert(error.message);
    } else {
        console.error("Signup failed:", error);
        alert("An unknown error occurred");
    }}
};

  return (
    <div className="signupage">
            <div className="leftsign">
                <form className="form-container" onSubmit={handleSignup}>
                    <Link to="/marginportal"  style={{ color: 'rgba(0, 0, 184, 1)', textDecoration: 'none' }}>← Back</Link>
                <h1>Create an Account</h1>
                <p>Enter your details to start your learning experience</p>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)}/>

                <div className="row">
                    <div className="col">
                    <label>Gender</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option>Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    </div>

                    <div className="col">
                    <label>Phone Number</label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phoneNumber} 
                        onChange={(value) => setPhoneNumber(value || '')}
                        defaultCountry="NG"
                        className="phone-input"
                    />
                    </div>
                </div>

                <label>Email</label>
                <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label>How did you hear about us?</label>
                <select  value={referralSource} onChange={(e) => setReferralSource(e.target.value)}>
                    <option>Select option</option>
                    <option>Social Media</option>
                    <option>Friend</option>
                    <option>Ad</option>
                    <option>Other</option>
                </select>

                <label>Password</label>
                <div className="password-input">
                    <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <span onClick={() => setPasswordVisible(!passwordVisible)} className="icon">
                    {passwordVisible ? <Eye className="grey-icon" /> : <EyeOff className="grey-icon" />}
                    </span>
                </div>

                <label>Confirm Password</label>
                <div className="password-input">
                    <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    placeholder="Re-enter password"
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} className="icon">
                    {confirmPasswordVisible ? <Eye className="grey-icon" /> : <EyeOff className="grey-icon" />}
                    </span>
                </div>

                <button type="submit" className="submit-button">Create</button>

                <p id="login-text">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
                </form>
            </div>

        <div className="rightsign">
            <div className="rightcontent">
                <img src="/Hakeela Logo Icon (white) 1.png" alt="" />
                <h1>Empowering<br/>the Next<br/>Generation of<br/>Creators and<br/>Innovators</h1>
                <p>At Hakeela, we equip students with practical<br/>digital skills to turn ideas into impact. From<br/>coding to design, our expert-led courses help<br/>you learn fast, build real projects, and thrive in<br/>the digital world.</p>
                <button>Join the Community ➜</button>
            </div>
        </div>

    </div>
  );
}
