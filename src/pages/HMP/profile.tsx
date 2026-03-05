import { useState, useEffect, useRef } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../../firebase/firebase"
import { doc, getDoc } from "firebase/firestore"
import styles from "../../components/styles/profile-dropdown.module.css"
import { storage } from "../../firebase/firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { updateDoc } from "firebase/firestore"
import { updateEmail, updatePassword } from "firebase/auth"
import PhoneInput from "react-phone-number-input";
import { Eye, EyeOff } from "lucide-react"
import { ProfileAvatar } from "../../components/profileavatar"

interface UserData {
  fullName: string
  email: string
  profilePicture: string
}

export default function Profile() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState<UserData | null>(null)
    const displayName = userData?.fullName || user?.displayName || "User"
    const displayImage = userData?.profilePicture || user?.photoURL || "/placeholder.png"
    const fileInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
        if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid))

        if (userDoc.exists()) {
            const data = userDoc.data() as UserData
            setUserData(data)

            setFullName(data.fullName || "")
            setEmail(data.email || "")
        }
        }
    }

    fetchUserData()
    }, [user])

    // Handler for name, email, phone, profile picture
const handleUpdateProfile = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!user) return

  let imageURL = userData?.profilePicture || ""

  try {
    if (imageFile) {
      const imageRef = ref(storage, `profilePictures/${user.uid}`)
      await uploadBytes(imageRef, imageFile)
      imageURL = await getDownloadURL(imageRef)
    }

    // Update Firestore
    await updateDoc(doc(db, "users", user.uid), {
      fullName,
      email,
      phoneNumber,
      profilePicture: imageURL
    })

    // Update Firebase Auth Email separately if it changed
    if (email !== user.email) {
      await updateEmail(user, email)
    }

    alert("Profile updated successfully")
  } catch (error: any) {
    console.error(error)
    if (error.code === "auth/requires-recent-login") {
      alert("Please log out and log back in before changing email.")
    }
  }
}

// Handler only for password
const handleUpdatePassword = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!user) return

  if (!password) {
    alert("Please enter a new password")
    return
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match")
    return
  }

  try {
    await updatePassword(user, password)
    setPassword("")
    setConfirmPassword("")
    alert("Password updated successfully")
  } catch (error: any) {
    console.error(error)
    if (error.code === "auth/requires-recent-login") {
      alert("Please log out and log back in before changing password.")
    }
  }
}
    return(
        <div>
            <div>
                <form style={{backgroundColor:'white', borderRadius:'20px', padding:'30px'}} onSubmit={handleUpdateProfile}>
                <div className={styles.profileContainer}>
                    <ProfileAvatar
                        imageUrl={imageFile ? URL.createObjectURL(imageFile) : displayImage}
                        altText="Profile"
                        onCameraClick={() => fileInputRef.current?.click()}
                    />

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={async (e) => {
                            if (!user) return
                            if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0]
                            setImageFile(file)

                            try {
                                const imageRef = ref(storage, `profilePictures/${user.uid}`)
                                await uploadBytes(imageRef, file)
                                const downloadURL = await getDownloadURL(imageRef)
                                // Update Firestore
                                await updateDoc(doc(db, "users", user.uid), {
                                profilePicture: downloadURL
                                })
                                // Update local state for instant UI update
                                setUserData(prev => prev ? { ...prev, profilePicture: downloadURL } : null)
                            } catch (err) {
                                console.error("Upload failed:", err)
                            }
                            }
                        }}
                    />
                    <span className={styles.userName} style={{fontSize:'20px', fontWeight:'600'}}>{displayName}</span>
                </div>
                <h1 style={{fontSize:'20px', fontWeight:'500', marginTop:'20px'}}>Account Information</h1>
                <p style={{fontSize:'13px'}}>Edit your personal account information</p>
                <label>Full Name</label>
                <input style={{fontSize:'13px'}} type="text" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)}/>

                <div className="row">
                    <div className="col">
                    <label>Phone Number</label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phoneNumber} 
                        onChange={(value) => setPhoneNumber(value || '')}
                        defaultCountry="NG"
                        className="phone-input"
                        style={{fontSize:'13px'}}
                    />
                    </div>
                </div>

                <label>Email</label>
                <input style={{fontSize:'13px'}} type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <button style={{width:'100px', borderRadius:'20px', fontSize:'13px'}} type="submit" className="submit-button">Update</button>
                </form>


                <form onSubmit={handleUpdatePassword}>
                <label>Password</label>
                <div className="password-input">
                    <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    style={{fontSize:'13px'}}
                    />
                    <span onClick={() => setPasswordVisible(!passwordVisible)} className="icon">
                    {passwordVisible ? <Eye className="grey-icon" /> : <EyeOff className="grey-icon" />}
                    </span>
                </div>

                <label>Confirm Password</label>
                <div className="password-input">
                    <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    placeholder="Re-enter password"
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{fontSize:'13px'}}
                    />
                    <span onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} className="icon">
                    {confirmPasswordVisible ? <Eye className="grey-icon" /> : <EyeOff className="grey-icon" />}
                    </span>
                </div>

                <button style={{width:'100px', borderRadius:'20px', fontSize:'13px'}} type="submit" className="submit-button">Update</button>
                </form>
            </div>
        </div>
    )
}
