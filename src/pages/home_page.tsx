import "./styling/homepage.css"
import { Eye, CircleDot, Rocket, Play } from 'lucide-react';


export default function Home() {
    return(
        <>
        <div className="homepage-desktop">
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
                    <img className="img1" src="/Image 1.png" alt=""></img>
                    <img id="img2" src="/Image 2.png" alt=""></img>
                    <img className="img3" src="/Image 3.png" alt=""></img>
                </div>
            </section>

            <section className="homesection2">
                <h2 className="text-[#0000B8] text-center text-2xl font-bold">Our Foundation</h2>
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
                <h4 className="font-semibold mb-4">
                Partners
                <img id="hand" src="/handshake.png" alt="" style={{height:'24px',width:'24px'}}/>
                                        </h4>
                    <img src="waff-removebg.png" alt=""/>
                    <img src="falf-removebg.png" alt=""/>
                    <img id="ept" src="experteens-removebg.png" alt=""/>
                    <img id="loi" src="loi-removebg.png" alt=""/>
                    <img id="ashoka" src="ashoka-removebg.png" alt=""/>
                </div>
            </section>

             <section className="homesection5">
                <h2 className="text-[#0000B8] text-center text-2xl font-bold">Impact+</h2>
                <p>
                    Measuring our global reach and the transformative effect<br/> 
                    we're having on communities worldwide
                </p>
                <img src="/theMap.png" alt="" />
            </section>


            <section className="homesection3">
            <h2 className="text-[#0000B8] text-center text-2xl font-bold">Our Initiative</h2>
                
                <div className="homesection3i">
                <div className="imgdiv">
                    <img src="/IMG_7688-removebg-preview 1.png" alt="" />
                </div>
                <div className="textdiv" style={{ marginTop: '20px' }}>
                    <img className="icons" src="/HSNAT2-removebg-preview 1.png"alt=""/>
                    <h3 className="homesection3-heading-desktop font-bold">
                        Empowering <br></br>
                        Accessibility Through A.I
                    </h3>

                    <p className="flex flext-start text-sm text-gray-700 max-w-sm mx-auto px-10">
                        “Through our Hak-AbilityTech Initiative; we are building a world where the visually impaired, speech impaired, or hearing impaired can learn tech skills, work in tech establishments,and we are doing all this using A.I”
                        <br></br>
                        <br></br>- Victor Eyo
                    </p>
                    {/* Mobile only: new heading and black paragraph */}
                    <h2 className="homesection3-heading-mobile">
                        Empowering Accessibility Through A.I
                    </h2>
                    <p className="homesection3-paragraph-mobile">
                        “Through our SNAT Platform; we are building a world where the visually impaired, speech impaired, or hearing impaired can learn tech skills, work in tech establishments, and we are doing all this using A.I”- Victor Eyo
                    </p>
                    <button>Learn More</button>
                </div>
                </div>
            </section>



            <section className="homesection3">

            <div className="homesection3i">
                <div className="textdiv" style={{ marginTop: '10px' }}>

                    <img className="icons" src="HakStudios.png" alt=""/>
                    <h3 className="homesection3-heading-desktop font-bold">
                        When Inclusion Meets<br></br>
                        Creativity
                    </h3>
                    <p className="flex flex-start text-sm text-gray-700 max-w-sm mx-auto px-10">
                        We build tech talent, design meaningful solutions, write impactful stories, and teach the next generation, all through the power of inclusive innovation.
                    </p>
                    {/* Mobile only: new heading and black paragraph */}
                    <h2 className="homesection3-heading-mobile">
                        Empowering Accessibility Through A.I
                    </h2>
                    <p className="homesection3-paragraph-mobile">
                        “Through our SNAT Platform; we are building a world where the visually impaired, speech impaired, or hearing impaired can learn tech skills, work in tech establishments, and we are doing all this using A.I”- Victor Eyo
                    </p>
                    <button style={{ width: '150px' }}>Collaborate with us</button>
                </div>
                
                <div className="imgdiv1">
                    <img src="homeImage.png" alt="" />
                </div>
                
                </div>
            </section>

            <section className="homesection3">
                <div className="imgdiv2">
                <h4 className="text-white" > Meet Hakportals!</h4>
                <p className="p2">Easily launch your courses, ebooks, events, and products — and accept payments all in one place.
                    </p>
                    <img src="hakportals.png" alt="" />
                    </div>


                </section>

            <section className="homesection4">
                <h2>Other Initiatives</h2>
                <p className="p2">Transforming lives through innovative programs designed<br/> 
                    to create inclusive opportunities in technology
                </p>

                <div className="homestatements">
                    <div className="statements">
                        <img className="icons" src="TECH_HUB.png" alt=""/>
                        <h3>Hakeela Tech Hub</h3>
                        <p className="flex flext-start text-sm text-gray-700 max-w-sm mx-auto px-10">
                           A network of physical tech hubs across at least 10 African countries, providing young Africans with quiet, durable workspaces to learn, collaborate, innovate, and grow.
                        </p>
                        <button>Learn More</button>
                    </div>
                    <div className="statements">
                        <img className="icons" src="/HFUND2-removebg-preview 1.png" alt=""/>
                        <h3>Hakeela Fund</h3>
                        <p className="flex flext-start text-sm text-gray-700 max-w-sm mx-auto px-10">
                            A dedicated scholarship program aimed at 
                            providing educational sponsorships for 
                            children and teens from marginalized 
                            communities across Africa.
                        </p>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>


            <section className="homesection6">
                <h2 className="text-[#0000B8] text-center text-2xl font-bold">Meet Our Team</h2>
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

                        <h5>Oluwatoyin Yerokun</h5>
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
                        
                        <div>
                        <div className="circle-background">
                            <img src="micheal_headshot.png" alt="" />
                        </div>
                        <h5>Nwogbaga Michael</h5>
                        <p>Product Designer</p>
                    </div>

                </div>


                <div className="ima">

                     <div className="chatbot">
                        <h2 className="flex flex-start text-[#0000B8] font-bold">
                            NOT SURE WHICH TECH SKILL
                            TO LEARN?
                        </h2>
                        <h4 className="text-gray-700 flex flex-start text-sm  max-w-sm mx-auto px-10">
                             if you’re struggling to find the right tech program or 
                             don’t know where to start, chat with Imaobong — our A.I. chatbot ready to guide you.
                        </h4>
                        <button>Chat with Imabong</button>
                    </div>

                    <div className="imabong-full">
                        <img src="new_imabong.png" alt="" />
                    </div>
                   
                </div>

                <div className="learn">
                    <div className="homelearn">
                        <h2 className="font-bold">"Learn a Tech Skill with <br/>
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

        {/* Mobile-only section - Design from scratch here */}
        <div className="homepage-mobile">
            {/* Add your mobile design here */}
        </div>
        </>
    )
}
