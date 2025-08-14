import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import './styles/signup.css';

export default function ResetPassword() {

  return (
    <div className="signupage">
            <div className="leftsign">
                <form className="form-container">
                    <Link to="/login"  style={{ color: 'rgba(0, 0, 184, 1)', textDecoration: 'none' }}>← Back</Link>
                <h1>Reset your password</h1>
                <p>Kindly enter the email address associated with your<br/>account to reset your password</p>

                <label>Email</label>
                <input type="email" placeholder="Enter email" />

                <button type="submit" className="submit-button">Send OTP code</button>
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
