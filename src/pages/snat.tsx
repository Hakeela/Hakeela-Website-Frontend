import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Snat() {
    return (
        <div>
            <nav className="navbarr">
                <Link to="/" className="navbar__logo">
                    <img src="/Hakeela Full Logo (Blue) 1.png" alt="Hakeela logo" />
                </Link>

                <div className="navbottons">
                    <Link to="/imabong" className="navbar__avatar">
                        <img src="/Imabong.png" alt="Profile avatar" />
                    </Link>
                </div>
            </nav>
            
            <section className="marginportalsection1">
                <div  className="margintext" style={{marginTop: '70px'}}>
                    <h1>"Welcome to a<br/>world of limitless<br/>possibilities"</h1>
                    <div className="margindivs">
                        <div>
                            <p className="pa2">300</p>
                            <p className="pa3">Special needs Trained</p>
                        </div>
                        <div>
                            <p className="pa2">4</p>
                            <p className="pa3">African countries</p>
                        </div>
                        <div>
                            <p className="pa2">70 hrs</p>
                            <p className="pa3">of learning</p>
                        </div>
                    </div>
                </div>

                <div className="marg" style={{marginLeft:'100px', padding:'0px'}}>
                    <img src="/Frame 309.png" alt="" style={{height:'450px', width: '550px', margin:'0px'}} />
                </div>  
            </section>

            <section className="marginportalsection2" style={{paddingBottom:'50px'}}>
                <div className="ssection" style={{height: '220px'}}>
                    <h2 style={{fontSize:'2em'}}>"Building a world where specially assisted<br/>
                         individuals can learn tech skills, and be relevant<br/>
                         in the socio-economic technological space"</h2>
                    <button>Learn more ▸</button>
                    <img src="/Frame 180.png" alt="" />
                </div>

                <div className="supportt">
                    <div className="support" style={{marginTop:'0px', width:'67em', gap:'40px', paddingLeft:'80px', paddingRight:'80px'}}>
                        <div className="donate" style={{width:'500px'}}>
                            <button>Support our mission</button>
                            <h1>Donate</h1>
                            <p style={{fontSize:'12px'}}>An interview with a participant from our Special needs and tech Workshop,<br/> 
                            Calabar chapter which aimed to teach digital skills to young people with<br/> 
                            hearing and speech disabilities. Join Hakeela as we empower special and<br/> 
                            marginalized youth in Africa with digital skills.</p>
                            <div className="bottons">
                                <button id="dbotton">Donate</button>
                                <button id="lbotton">Learn More</button>
                            </div>
                        </div>

                        <div className="interview">
                            <div className="playbotton"><Play color="white" size={20}/></div>
                            <h4>Special Needs Workshop Interview</h4>
                            <p style={{fontSize:'9px'}}>Watch an inspiring interview with a participant from our Calabar<br/> 
                            chapter workshop, sharing their journey of learning digital skills.</p>
                        </div>
                    </div>
                </div>

                <div style={{display:'flex', gap:'20px', marginTop:'50px', marginBottom:'50px'}}>
                        <img src="./Frame 158.png" alt="" style={{height:'350px', width: '450px', margin:'0px'}}/>
                    <div style={{alignContent:'center'}}>
                        <h2 style={{color: 'rgba(0, 0, 184, 1)', fontSize:'1.5em'}}>
                            “Meet 16 year old speech impaired design<br/> progidy. Just like bright, we are training<br/> and equipping young people with special<br/>
                             needs across 4 African countries and<br/> more with tech skills”
                        </h2>
                        <button style={{color: 'rgba(0, 0, 184, 1)', backgroundColor:'white', border: '1px solid rgba(0, 0, 184, 1)', marginTop: '10px',  whiteSpace: 'nowrap',
                                        borderRadius: '20px', width: '100px', height: '20px', fontSize: '10px', overflow: 'visible', textOverflow: 'ellipsis'}}>Read More</button>
                    </div>
                </div>

                <h2 style={{color: 'rgba(0, 0, 184, 1)'}}>Courses</h2>
                <p>View our list of special courses</p>
                <div className="gain">
                    <div>
                        <img src="./Frame 247.png" alt="" style={{height:'250px'}} />
                        <h3>Introduction to Computer</h3>
                        <p>Begin your tech career by understanding Computer essentials</p>
                        <button>Enroll</button>
                    </div>
                    <div>
                        <img src="./Frame 248.png" alt="" style={{height:'250px'}}/>
                        <h3>Excel for Beginners</h3>
                        <p>Welcome to the world of charts and tables!</p>
                        <button>Enroll</button>
                    </div>
                </div>

                <h2 style={{color: 'rgba(0, 0, 184, 1)'}}>Impact Highlights</h2>
                <img src="./Frame 303.png" alt="" style={{width:'95vw', height:'auto', margin:'20px'}}/>
            </section>

            <Footer/>
        </div>
    )
}