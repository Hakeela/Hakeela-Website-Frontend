import { useState, useRef, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../firebase/firebase"
import { doc, getDoc } from "firebase/firestore"
import styles from "./styles/profile-dropdown.module.css"
import { useNavigate } from "react-router-dom"

interface UserData {
  fullName: string
  email: string
  profilePicture: string
}

export default function ProfileDropdown() {
  const [user, loading] = useAuthState(auth)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSignOut = async () => {
    try {
      await auth.signOut()
      navigate("/marginportal");
      setIsOpen(false)
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  if (loading) return <div className={styles.loading}>Loading...</div>
  if (!user) return null

  const displayName = userData?.fullName || user.displayName || "User"
  const displayEmail = userData?.email || user.email || ""
  const displayImage = userData?.profilePicture || user.photoURL || "/placeholder.png"

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button className={styles.trigger} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-haspopup="true">
        <img src={displayImage || "/placeholder.png"} alt="Profile" className={styles.avatar} />
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.userInfo}>
            <img src={displayImage || "/placeholder.png"} alt="Profile" className={styles.menuAvatar} />
            <div className={styles.userDetails}>
              <div className={styles.userName}>{displayName}</div>
              <div className={styles.userEmail}>{displayEmail}</div>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.menuItems}>
            <button className={styles.menuItem}>
              <span>Profile</span>
            </button>
            <button className={styles.menuItem}>
              <span>Settings</span>
            </button>
            <div className={styles.divider}></div>
            <button className={styles.menuItem} onClick={handleSignOut}>
              <span>Sign out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
