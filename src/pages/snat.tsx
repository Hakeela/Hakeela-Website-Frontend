import { Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Snat() {
    return (
        <div>
            <nav className="navbarr">
                <Link to="/" className="navbar__logo">
                    <img src="/Hakeela Full Logo (Blue) 1.png" alt="Hakeela logo" />
                </Link>

                <div className="navbottons">
                    <Link to="/" className="navbar__avatar">
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
            </section>
        </div>
    )
}