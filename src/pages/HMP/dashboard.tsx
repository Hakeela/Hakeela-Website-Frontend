import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import './styles/dashboard.css'
import { CreditCard, Users } from "lucide-react";

interface UserData {
  fullName: string;
  email: string;
  profilePicture: string;
}

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data() as UserData;
            setUserData(data);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in to access your dashboard.</div>;

  const displayName = userData?.fullName || user.displayName || "User";

  return (
    <div className="dashboard">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={() => setShowDebug(!showDebug)} style={{ marginBottom: 12, padding: '6px 10px', cursor: 'pointer' }}>
          {showDebug ? 'Hide' : 'Show'} Auth Debug
        </button>
      </div>
      {showDebug && (
        <pre style={{ background: '#111827', color: '#fff', padding: 12, borderRadius: 8, overflowX: 'auto' }}>
          {JSON.stringify({ user: user ?? null, userData }, null, 2)}
        </pre>
      )}
      <div className="dsection1">
        <div className="ds1text">
            <h1>
            Welcome back, {displayName}! You're on a roll!
            </h1>
            <p>Your consistency is paying off and you're making tremendous progress. Keep going, and you'll<br/>
            complete your course in no time. A certificate with your name on it is waiting!</p>
        </div>
        <div className="ds1img"><img src="/Welcome.png" alt="" /></div>
      </div>

      <h2>Quick Actions</h2>
        <div className="dsection2">
            <div className="ds2img">
                <img src="/Frame 2002.png" alt="" />
                <div className="dsec2div1">
                    <p>Resume Course</p>
                    <h3>Data Analysis</h3>
                    <h4>Introduction to data analytics</h4>
                    <button>Continue</button>
                </div>
            </div>

            <div className="dsec2div2">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "30px",       
                        height: "30px",     
                        borderRadius: "50%", 
                        backgroundColor: "#EEF", 
                    }}>
                    <Users size={16} color="rgba(0, 0, 184, 1)" strokeWidth={2}/>
                </div>
                <h3>Invite your friends</h3>
                <p>We support a P2P learning community. Invite your friends to learn<br/>a tech skill, and be a part of your learning journey.</p>
                <button style={{color:'white', backgroundColor:"rgba(0, 0, 184, 1)"}}>Invite</button>
            </div>

            <div className="dsec2div2">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "30px",       
                        height: "30px",      
                        borderRadius: "50%", 
                        backgroundColor: "rgba(247, 250, 214, 1)", 
                    }}>
                    <CreditCard size={16} color="orange" strokeWidth={2}/>
                </div>
                <h3>Pay for your certificate</h3>
                <p>We support a P2P learning community. Invite your friends to learn a<br/>
                    tech skill, and be a part of your learning journey.</p>
                <button style={{color:'black', backgroundColor:"orange"}}>Invite</button>
            </div>
        </div>
    </div>
  );
}
