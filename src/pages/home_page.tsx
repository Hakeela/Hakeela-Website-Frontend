import "./styling/homepage.css"
import { Eye, CircleDot, Rocket, Play } from 'lucide-react';


export default function Home() {
    return(
        <div className="homepage">
            <section className="homesection1">
                <div className="hometexts">
                    <h1 className="hometext">"Building the Future of Tech <br/> Inclusion one community a time"</h1>
                    <h3 className="hometext">using AI + Empathy</h3>
                    <p className="p1">Creating an inclusive and sustainable future of edtech for young <br/>
                        Africans that are marginalized, underprivileged, and specially assisted.
                    </p>
                </div>
                <button className="button1">Learn More</button>

                <div className="homeimages1">
                    <img src="/Image 1.png"></img>
                    <img id="img2" src="/Image 2.png"></img>
                    <img src="/Image 3.png"></img>
                </div>
            </section>

            <section className="homesection2">
                <h2>Our Foundation</h2>
                <p className="p2">Building sustainable impact through clear vision, 
                    focused <br/> mission, and measurable objectives
                </p>

                <div className="homestatements">
                    <div className="statements">
                        <Eye className="icon-button" size={24} strokeWidth={2} color="white"/>
                        <h3>Vision</h3>
                        <p>
                            To provide the best technological learning,<br/> 
                            grooming, and growing platform for<br/> 
                            marginalized and special needs people, and<br/> 
                            also become the number one ed-tech solution<br/> 
                            provider for individuals, businesses, and<br/> 
                            organizations globally.
                        </p>
                    </div>
                    <div className="statements">
                        <CircleDot className="icon-button" size={24} strokeWidth={2} color="white"/>
                        <h3>Mision</h3>
                        <p>
                            Our mission is to build an inclusive future<br/> 
                            where marginalized and special needs<br/> 
                            individuals have equal access to tech skills<br/> 
                            and opportunities. We aim to break barriers,<br/> 
                            promote inclusivity, and empower everyone<br/> 
                            to thrive in the global tech economy through<br/> 
                            accessibility and policy advocacy.
                            organizations globally.
                        </p>
                    </div>
                    <div className="statements">
                        <Rocket className="icon-button" size={24} strokeWidth={2} color="white"/>
                        <h3>Objectives</h3>
                        <p>
                            By 2030, we aim to train 10,000+ marginalized<br/> 
                            individuals, onboard 5,000+ to our AI-powered<br/> 
                            platform, lead in inclusive edtech, influence<br/> 
                            policies in 20+ countries, and build hubs and<br/> 
                            partnerships for learning and jobs.
                        </p>
                    </div>
                </div>

                <div className="homepartners">
                    <h4>Partners</h4>
                    <img id="hand" src="/handshake.png" alt=""/>
                    <img src="waff-removebg.png" alt=""/>
                    <img src="falf-removebg.png" alt=""/>
                    <img id="ept" src="experteens-removebg.png" alt=""/>
                    <img id="loi" src="loi-removebg.png" alt=""/>
                    <img id="ashoka" src="ashoka-removebg.png" alt=""/>
                </div>
            </section>

            <section className="homesection3">
                <div className="imgdiv">
                    <img src="/IMG_7688-removebg-preview 1.png" alt="" />
                </div>
                <div>
                    <h3>
                        “Through our SNAT Platform; we are<br/> 
                        building a world were the visually<br/>
                        impaired, speech impaired, or hearing<br/> 
                        impaired can learn tech skills, work in<br/> 
                        tech establishments, and we are doing<br/> 
                        all this using A.I”<br/>
                        - Victor Eyo
                    </h3>
                    <button>Learn More</button>
                </div>
            </section>

            <section className="homesection4">
                <h2>Our Initiatives</h2>
                <p className="p2">Transforming lives through innovative programs designed<br/> 
                    to create inclusive opportunities in technology
                </p>

                <div className="homestatements">
                    <div className="statements">
                        <img className="icons" src="/HSNAT2-removebg-preview 1.png"/>
                        <h3>Special Needs and Tech</h3>
                        <p>
                            Our A.I Tech designed to enhance<br/> 
                            communication and learning for people with<br/> 
                            special needs. SNAT is also our hybrid<br/> 
                            bootcamp designed to empower special<br/> 
                            needs people with tech skills
                        </p>
                        <button>Learn More</button>
                    </div>
                    <div className="statements">
                        <img className="icons" src="/HMI-2-removebg-preview 1.png" />
                        <h3>Margin Internship</h3>
                        <p>
                            An 8-week hybrid bootcamp (virtual and<br/> 
                            physical) designed for young Africans aged<br/> 
                            15–25, focused on building essential tech skills<br/> 
                            in areas like Data Science, Artificial<br/> 
                            Intelligence, Cybersecurity, Product Design,<br/> 
                            and Software Development.
                        </p>
                        <button>Learn More</button>
                    </div>
                    <div className="statements">
                        <img className="icons" src="/HFUND2-removebg-preview 1.png"/>
                        <h3>Hakeela Fund</h3>
                        <p>
                            A dedicated scholarship program aimed at<br/> 
                            providing educational sponsorships for<br/> 
                            children and teens from marginalized<br/> 
                            communities across Africa.
                        </p>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>

            <section className="homesection5">
                <h2>Impact+</h2>
                <p>
                    Measuring our global reach and the transformative effect<br/> 
                    we're having on communities worldwide
                </p>
                <img src="/worldmap.png" alt="" />
            </section>

            <section className="homesection6">
                <h2>Meet Our Team</h2>
                <p>
                    Check out the unique individuals that are<br/> 
                    powering these amazing initiatives
                </p>
                <div className="team">
                    <div>
                        <div className="circle-background">
                            <img src="/van-removebg-preview 1.png" alt="" />
                        </div>
                        <h5>Victor Eyo</h5>
                        <p>Founder, Director</p>
                    </div>
                    <div>
                        <div className="circle-background">
                            <img src="/toyin-removebg-preview 1.png" alt="" />
                        </div>
                        <h5>Oluwatoyin Joy Yerokun</h5>
                        <p>Information/Project Director</p>
                    </div>
                    <div>
                        <div className="circle-background">
                            <img src="/emmanuel-removebg.png" alt="" />
                        </div>
                        <h5>Edor Emmanual</h5>
                        <p>Chief Product Designer</p>
                    </div>
                    <div>
                        <div className="circle-background">
                            <img src="/comfort-removebg-preview 1.png" alt="" />
                        </div>
                        <h5>Comfort Alphonsus</h5>
                        <p>Chief Graphics Designer</p>
                    </div>
                </div>

                <div className="maindiv">
                    <div className="homediv">
                        <div>
                            <h3>"From community project <br/>
                                to a global organization"
                            </h3>
                            <p>
                                The history of Hakeela (fka Wegodigiteens) and why it<br/>
                                started as told by the founder
                            </p>
                            <button>Read More</button>
                        </div>
                        <img src="/victor-removebg.png"/>
                    </div>
                </div>

                <div className="ima">
                    <div className="imabong">
                        <img src="/IMG_5568 1.png" alt="" />
                    </div>
                    <div className="chatbot">
                        <h3>
                            Having difficulties finding the right tech <br/>
                            program for yourself? You don't know<br/>
                            what tech skill to learn?
                        </h3>
                        <h3>
                            Chat with Imabong - our A.I Chatbot <br/>
                            she speaks sign language too!
                        </h3>
                        <button>Chat</button>
                    </div>
                </div>

                <div className="learn">
                    <div className="homelearn">
                        <h2>"Learn a Tech Skill with <br/>
                            Hakeela today"
                        </h2>
                        <button>Get Started</button>
                        <img src="/Frame 180.png" alt="" />
                    </div>
                </div>

                <div className="supportt">
                    <div className="support">
                        <div className="donate">
                            <button>Support our mission</button>
                            <h1>Donate</h1>
                            <p>An interview with a participant from our Special needs and tech Workshop,<br/> 
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
                            <p>Watch an inspiring interview with a participant from our Calabar<br/> 
                            chapter workshop, sharing their journey of learning digital skills.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}