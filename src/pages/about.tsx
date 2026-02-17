import { Accessibility, FolderClosed, GraduationCap, Instagram, Linkedin, Speech, X } from 'lucide-react'
import './styling/about.css'
import './styling/about.mobile.css'

export default function About() {
    return(
        <div className='aboutpage'>
            <div className='aboutus'>
                <p>About Us</p>
                <h1>“We believe that every person should have<br/> 
                    access to tech skills, irrespective of their<br/> 
                    background and abilities”
                </h1>
                <button>Join our Commnunity</button>
            </div>

            <div>
                <div className='aboutsection2'>
                    <img src="/aboutpage1.png" alt="" />
                    <div>
                        <h2>Who We Are</h2>
                        <p>Hakeela.org (fka wegoodlittgenja) is a social enterprise designed to train and<br/> 
                        equip young Africans from marginalized backgrounds and special needs<br/> 
                        individuals with tech skills.</p>
                        <p className='o'>- We use AI to bridge communication and edtech learning gap for special<br/> 
                        needs people.</p>
                        <p className='o'>- We empower marginalized individuals in tech skills, accessible<br/> 
                        tech education, and tech job opportunities.</p>
                    </div>
                </div>
            </div>

            <div className='aboutsection3'>
                <h2>What We Do</h2>
                <p id='o1'>"Building the Future of Tech Inclusion one community at a time"</p>
                <p>Hakeela is a lifeline for marginalized and special needs individuals learning to be part of the tech ecosystem.<br/>
                    We exist to ensure marginalized Africans and special needs individuals can independently and confidently learn tech skills,<br/> 
                    land tech roles, launch successful tech businesses, and take their rightful place in the tech industry.</p>
            </div>

            <div className='whatwedo'>
                <div className='tophalf'>
                    <div className='wedo'>
                        <Speech className='icon-button' size={24} strokeWidth={2} color="white"/>
                        <h3>AI powered accessible learning and<br/>communication platform</h3>
                        <p>
                            Leveraging artificial intelligence to create inclusive learning experiences for<br/>everyone.
                        </p>
                    </div>

                    <div className='wedo'>
                        <Accessibility className='icon-button' size={24} strokeWidth={2} color="white"/>
                        <h3>Specialised curriculums and training for people<br/>of all backgrounds and abilities</h3>
                        <p>
                            Customized learning paths designed for diverse backgrounds and<br/>accessibility needs.
                        </p>
                    </div>
                </div>

                <div className='tophalf'>
                    <div className='wedo'>
                        <FolderClosed className='icon-button' size={24} strokeWidth={2} color="white"/>
                        <h3>Hands on learning experiences and live<br/>internships</h3>
                        <p>
                            Practical, real-world experience through live projects and internship<br/>opportunities.
                        </p>
                    </div>

                    <div className='wedo'>
                        <GraduationCap className='icon-button' size={24} strokeWidth={2} color="white"/>
                        <h3>Educational funding & Scholarships for<br/>underserved communities</h3>
                        <p>
                            Financial support and educational opportunities for those who need it<b/>most.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Stories that are changing the world</h2>

            <div className='aboutsection4'>
                <div className='storiesdiv'>
                    <div className='stories'>
                        <img src="/IMG_7688-removebg-preview 1.png" alt="" id='story1'/>
                    </div>
                    <p>
                        Learn how Hakeela started, why it started and the impact the Edtech organization <br/>
                        has been making in regions across Africa, and why Hakeela is the literally the <br/>
                        Future.
                    </p>
                    <button>Read More</button>
                </div>

                <div className='storiesdiv'>
                    <div className='stories'>
                        <img src="/victor-removebg.png" alt="" />
                    </div>
                    <p>
                        Learn how Hakeela started, why it started and the impact the Edtech organization <br/>
                        has been making in regions across Africa, and why Hakeela is the literally the <br/>
                        Future.
                    </p>
                    <button>Read More</button>
                </div>
            </div>

            <div className='aboutsection5'>
                <h1>
                    Ready to get started? Kickstart your<br/>tech journey today.
                </h1>
                <button>Explore</button>
                <img src="/Frame 180.png" alt="" />
            </div>

            <h2>Meet the Individuals, changing the world</h2>

            <div>
                <div className="team">
                    <div>
                        <div className="circle-background">
                            <img src="/victor.png" alt="" />
                        </div>
                        <h5>Victor</h5>
                        <p>Founder/CEO Hakeela</p>
                        <div className="social-icons">
                            <Linkedin size={20} strokeWidth={1.5} />
                            <Instagram size={20} strokeWidth={1.5} />
                            <X size={20} strokeWidth={1.5} />
                        </div>
                    </div>
                    <div>
                        <div className="circle-background">
                            <img src="/comfort.png" alt="" />
                        </div>
                        <h5>Comfort Alphonsus</h5>
                        <p>Founder/CEO Hakeela</p>
                        <div className="social-icons">
                            <Linkedin size={20} strokeWidth={1.5} />
                            <Instagram size={20} strokeWidth={1.5} />
                            <X size={20} strokeWidth={1.5} />
                        </div>
                    </div>
                    <div>
                        <div className="circle-background">
                            <img src="/laurenz.png" alt="" />
                        </div>
                        <h5>Laurenz</h5>
                        <p>Founder/CEO Hakeela</p>
                        <div className="social-icons">
                            <Linkedin size={20} strokeWidth={1.5} />
                            <Instagram size={20} strokeWidth={1.5} />
                            <X size={20} strokeWidth={1.5} />
                        </div>
                    </div>
                    <div>
                        <div className="circle-background">
                            <img src="/kavita.png" alt="" />
                        </div>
                        <h5>Kavita</h5>
                        <p>Founder/CEO Hakeela</p>
                        <div className="social-icons">
                            <Linkedin size={20} strokeWidth={1.5} />
                            <Instagram size={20} strokeWidth={1.5} />
                            <X size={20} strokeWidth={1.5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}