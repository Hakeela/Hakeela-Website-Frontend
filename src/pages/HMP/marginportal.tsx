import { Link } from "react-router-dom"
import './styles/marginportal.css'
import Footer from "../../components/footer"

export default function MarginPortal() {
    return(
        <div>
            <nav className="navbarr">
                <Link to="/" className="navbar__logo">
                    <img src="/Hakeela Full Logo (Blue) 1.png" alt="Hakeela logo" />
                </Link>

                <div className="navbottons">
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button id="signupbtn">Sign Up</button>
                    </Link>

                    <Link to="/" className="navbar__avatar">
                        <img src="/Imabong.png" alt="Profile avatar" />
                    </Link>
                </div>
            </nav>

            <section className="marginportalsection1">
                <div className="margintext">
                    <h1>Gain In-demand tech<br/>skills for free!</h1>
                    <p id="p1">Upskill yourself with our various tech programs designed for people of all<br/>
                    backgrounds and abilities. Gain hands on experience and be ready to intern or<br/>
                    start entry-level positions in 8 weeks.</p>
                    <button>Get Started for free ▸</button>
                    <div className="margindivs">
                        <div>
                            <p className="pa2">1000+</p>
                            <p className="pa3">Students Trained</p>
                        </div>
                        <div>
                            <p className="pa2">65%</p>
                            <p className="pa3">Job Placement</p>
                        </div>
                        <div>
                            <p className="pa2">8</p>
                            <p className="pa3">Weeks Training</p>
                        </div>
                    </div>
                </div>

                <div className="marginn">
                    <img id="marginimg" src="/Frame 219.png" alt="" />
                </div>  
            </section>

            <section className="marginportalsection2">
                <div className="ssection">
                    <h2>"Kickstart your tech journey with<br/>
                         Hakeela Margin Internship"</h2>
                    <button>Get Started ▸</button>
                    <img src="/Frame 180.png" alt="" />
                </div>

                <h1>What you stand to gain</h1>
                <p className="pa4">Be a part of the Hakeela Margin<br/>Internship to enjoy these benefits</p>

                <div className="gain">
                    <div>
                        <img src="/marginportalimg.png" alt="" />
                        <h3>Internships & Job Placements</h3>
                        <p>Gain access to internship opportunities and job placements after<br/> the 8 weeks program</p>
                        <button>Learn More</button>
                    </div>
                    <div>
                        <img src="blog.png" alt="" />
                        <h3>Certification</h3>
                        <p>Get a certificate of completion from Hakeela</p>
                        <button>Learn More</button>
                    </div>
                </div>

                <h1>Courses</h1>
                <p className="pa4">Select from our wide range of<br/>courses and get started!</p>

                <div className="courses">
                    <div className="course">
                        <div className="courseimg"><img src="/Data Analysis.png" alt="" /></div>
                        <h3>Data Analysis</h3>
                        <p>Unlock the power of data to make smart, informed<br/>
                        decisions. This course equips you with analytical<br/>
                        tools and techniques to interpret, visualize,<br/>
                        and communicate data effectively.</p>
                    </div>
                    <div className="course">
                        <div className="courseimg"><img src="/Designer.png" alt="" /></div>
                        <h3>Product Design</h3>
                        <p>Learn how to create user-centered products that<br/>
                        solve real problems. This hands-on course walks<br/>
                        you through the design thinking process, UI/UX<br/>
                        principles, and the tools top designers use.</p>
                    </div>
                    <div className="course">
                        <div className="courseimg"><img src="/Coding.png" alt="" /></div>
                        <h3>Web Development</h3>
                        <p>Start from the basics and grow into a full-stack<br/>
                        web developer. This course takes you from writing<br/>
                        your first line of code to deploying real-world<br/>
                        applications.</p>
                    </div>
                </div>

                <div className="ssection">
                    <h2>Ready to get your free career roadmap?</h2>
                    <p>Download your free guide and take the first step toward your dream tech career</p>
                    <button>Download ⇩</button>
                    <img src="/Frame 180.png" alt="" />
                </div>
            </section>

            <Footer/>
        </div>
    )
}