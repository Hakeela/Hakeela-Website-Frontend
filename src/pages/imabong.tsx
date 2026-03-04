import './styling/landingpage.css'
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Imabong() {
    return (
        <div>
            <nav className="navbarr" style={{borderBottom:'1px solid #534f4f5d'}}>
                <Link to="/"  style={{ color: 'rgba(0, 0, 184, 1)', textDecoration: 'none', marginRight:'auto' }}>← Back</Link>
                <div className="navbottons">
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button id="signupbtn">Sign Up</button>
                    </Link>
                </div>
            </nav>
            <div className="landingpage">
                <div className='landingpageimage'>
                    <img src="/IMG_5568 1.png" alt="" />
                </div>
                <h1>Hi, I'm Imaobong!</h1>
                <p>Your AI assistant at Hakeela. I'm here to help you navigate your tech<br/> 
                    career journey with personalized guidance and expert insights.
                </p>
                <div className="chat-prompt">
                    <input
                        type="text"
                        className="chat-input"
                        placeholder="Not sure of the perfect tech career for you? Let’s chat"
                    />
                    <Link to='#'>
                        <button className="chat-button">
                            <Send size={16} strokeWidth={2} />
                        </button>
                    </Link>
                </div>

                <div className="action-buttons-container">
                    <div className="action-button-group">
                        <Link to='#'><button className="action-button outlined">Attach</button></Link>
                        <Link to='#'><button className="action-button filled">Code Review</button></Link>
                        <Link to='#'><button className="action-button outlined">Brainstorm</button></Link>
                         <Link to='#'><button className="action-button outlined">Study Plan</button></Link>
                        <Link to='#'><button className="action-button filled">Cover Letter</button></Link>
                    </div>
                </div>
                <p id='p'>By messaging Imaobong, you agree our Terms and have read our Privacy Policy.</p>
            </div>
        </div>
    )
}