import { BookMarked, CircleCheckBig, Clock4, Trophy } from "lucide-react"
import "./styles/courses.css"

export default function Courses() {
    return(
        <div className="mpcourse">
            <div className="csection1">
                <div className="cs1div">
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "30px",       
                        height: "30px",     
                        borderRadius: "10%", 
                        backgroundColor: "#EEF", 
                    }}>
                        <BookMarked size={16} color="rgba(0, 0, 184, 1)" strokeWidth={2}/>
                    </div>
                    <div className="cs1divtext">
                        <h1>3</h1>
                        <p>Enrolled Courses</p>
                    </div>
                </div>

                <div className="cs1div">
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "30px",       
                        height: "30px",     
                        borderRadius: "10%", 
                        backgroundColor: "rgba(10, 200, 64, 0.1)", 
                    }}>
                        <CircleCheckBig size={16} color="rgba(10, 200, 64, 1)" strokeWidth={2}/>
                    </div>
                    <div className="cs1divtext">
                        <h1>14</h1>
                        <p>Completed Lessons</p>
                    </div>
                </div>

                <div className="cs1div">
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "30px",       
                        height: "30px",     
                        borderRadius: "10%", 
                        backgroundColor: "rgba(138, 56, 245, 0.1)", 
                    }}>
                        <Trophy size={16} color="rgba(138, 56, 245, 1)" strokeWidth={2}/>
                    </div>
                    <div className="cs1divtext">
                        <h1>24h</h1>
                        <p>Total Study Time</p>
                    </div>
                </div>

                <div className="cs1div">
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "30px",       
                        height: "30px",     
                        borderRadius: "10%", 
                        backgroundColor: "rgba(255, 202, 6, 0.1)", 
                    }}>
                        <Clock4 size={16} color="rgba(255, 202, 6, 1)" strokeWidth={2}/>
                    </div>
                    <div className="cs1divtext">
                        <h1>85%</h1>
                        <p>Average Score</p>
                    </div>
                </div>
            </div>

            <div className="csection2">
                <h2>Enrolled Courses</h2>
                <button>Enroll New Course</button>
            </div>

            <div className="csection3">
                <div className="cs3div">
                    <img src="./courses2.png" alt="" />
                    <h3>Data Science</h3>
                    <p>Introduction to Data Analytics</p>
                    <button>Continue Learning</button>
                </div>

                <div className="cs3div">
                    <img src="./courses1.png" alt="" />
                    <h3>Everyone a Changemaker</h3>
                    <p>Unlock skills, knowledge and insight on how to lead a change in your<br/>community</p>
                    <button>Continue Learning</button>
                </div>
            </div>
        </div>
    )
}