import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { doc, onSnapshot } from "firebase/firestore"
import { auth, db } from "../firebase/firebase"

interface UserData {
  fullName: string
  email: string
  profilePicture: string
}

export function useUserData() {
  const [user, loading, error] = useAuthState(auth)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [userDataLoading, setUserDataLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setUserData(null)
      setUserDataLoading(false)
      return
    }

    // Real-time listener for user data changes
    const unsubscribe = onSnapshot(
      doc(db, "users", user.uid),
      (doc) => {
        if (doc.exists()) {
          setUserData(doc.data() as UserData)
        }
        setUserDataLoading(false)
      },
      (error) => {
        console.error("Error fetching user data:", error)
        setUserDataLoading(false)
      },
    )

    return () => unsubscribe()
  }, [user])

  return {
    user,
    userData,
    loading: loading || userDataLoading,
    error,
  }
}
