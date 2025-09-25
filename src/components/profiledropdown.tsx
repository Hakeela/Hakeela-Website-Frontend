import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../firebase/firebase"
import { doc, getDoc } from "firebase/firestore"
import styles from "./styles/profile-dropdown.module.css"

interface UserData {
  fullName: string
  email: string
  profilePicture: string
}

export default function ProfileDisplay() {
  const [user, loading] = useAuthState(auth)
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid))
          if (userDoc.exists()) {
            const data = userDoc.data() as UserData
            setUserData(data)
          }
        } catch (error) {
          console.error("Error fetching user data:", error)
        }
      }
    }

    fetchUserData()
  }, [user])

  if (loading) return <div className={styles.loading}>Loading...</div>
  if (!user) return null

  const displayName = userData?.fullName || user.displayName || "User"
  const displayImage = userData?.profilePicture || user.photoURL || "/placeholder.png"

  return (
    <div className={styles.profileContainer}>
      <img src={displayImage} alt="Profile" className={styles.avatar} />
      <span className={styles.userName}>Welcome, {displayName}</span>
    </div>
  )
}
