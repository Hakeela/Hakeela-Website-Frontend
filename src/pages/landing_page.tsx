import './styling/landingpage.css';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
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
                <Link to='/home'>
                    <button className="chat-button">
                        <Send size={16} strokeWidth={2} />
                    </button>
                </Link>
            </div>

            <div className="action-buttons-container">
                <div className="action-button-group">
                    <Link to='/home'><button className="action-button outlined">Learn</button></Link>
                    <Link to='/home'><button className="action-button filled">Get Internships</button></Link>
                    <Link to='/home'><button className="action-button outlined">Get mentorships</button></Link>
                    <Link to='/home'><button className="action-button filled">Choose a tech career</button></Link>
                    <Link to='/home'><button className="action-button outlined">Upskill</button></Link>
                </div>

                <div className="action-button-group bottom-group">
                    <Link to='/home'><button className="action-button outlined">Special needs and tech</button></Link>
                    <Link to='/home'><button className="action-button filled">Learn more</button></Link>
                </div>
            </div>
            <p id='p'>By messaging Imaobong, you agree our Terms and have read our Privacy Policy.</p>
        </div>
    );
}