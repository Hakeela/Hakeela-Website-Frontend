import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "react-phone-number-input/style.css";
import './styles/signup.css';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="signupage">
            <div className="leftsign">
                <form className="form-container">
                    <Link to="/signup"  style={{ color: 'rgba(0, 0, 184, 1)', textDecoration: 'none' }}>← Back</Link>
                <h1>Log into yourAccount</h1>
                <p>Login to continue your learning experience</p>

                <label>Email</label>
                <input type="email" placeholder="Enter email" />

                <label>How did you hear about us?</label>
        
                <label>Password</label>
                <div className="password-input">
                    <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter password"
                    />
                    <span onClick={() => setPasswordVisible(!passwordVisible)} className="icon">
                    {passwordVisible ? <Eye className="grey-icon" /> : <EyeOff className="grey-icon" />}
                    </span>
                </div>

                <Link className="reset" to='/resetpassword'>Reset Password</Link>

                <button type="submit" className="submit-button">Login</button>

                <p id="login-text">
                    Don't have an account? <Link to="/signup">Create an Account</Link>
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
