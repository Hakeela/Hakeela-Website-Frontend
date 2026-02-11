import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { db, auth } from "../../firebase/firebase";
import { BriefcaseBusiness, FileBadge, ListChecks, Target, Trophy } from "lucide-react";
import "./styles/certificates.css"

interface UserData {
  fullName: string;
  email: string;
  profilePicture: string;
}

export default function Certififcates() {
    const [user, loading] = useAuthState(auth);
  const [userData, setUserData] = useState<UserData | null>(null);

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

    return(
        <div className="certificates">
            <div className="certdiv1">
              <div className="icon-large">
                <Trophy className="icon-svg" color='black' strokeWidth={2}/>
              </div>
                <h1>Your Certificate Journey</h1>
                <p>Your name, {displayName}, will appear on your certificates. <Link to={"/profile"} style={{textDecoration:'underline', color:'white', fontWeight:'600'}}><span>Click here to change your name</span></Link> on your<br/>profile page.</p>
            </div>

            <div className="certdiv2">
                <div className="icon-small">
                  <FileBadge className="icon-svg" color="rgba(0, 0, 184, 1)" strokeWidth={2}/>
                </div>
                <h4>Your Certificate Journey</h4>
                <p>Certificates will be sent via email after completion of your registered program or course, and after payment for your certificate.</p>
                <div className="certdiv3">
                    <div style={{display:"flex", gap:"5px", marginBottom:"5px"}}>
                        <ListChecks size={16} color="rgba(226, 23, 23, 1)" strokeWidth={2}/>
                        <h5 style={{fontWeight:"500"}}>Requirements</h5>
                    </div>
                    <p>Complete all course modules and submit required assignments before requesting your certificate.</p>
                </div>
            </div>

            <div className="certdiv2">
                <div className="icon-small">
                  <BriefcaseBusiness className="icon-svg" color="rgba(0, 0, 184, 1)" strokeWidth={2}/>
                </div>
                <h4>Internship Qualification</h4>
                <p>Only those with verified certificates can qualify for internship placements and advanced career opportunities.</p>
                <div className="certdiv3">
                    <div style={{display:"flex", gap:"5px", marginBottom:"5px"}}>
                        <Target size={16} color="rgba(226, 23, 23, 1)" strokeWidth={2}/>
                        <h5 style={{fontWeight:"500"}}>Benefits</h5>
                    </div>
                    <p>Certified students get priority access to job placements, mentorship programs, and industry partnerships.</p>
                </div>
            </div>
        </div>
    )
}