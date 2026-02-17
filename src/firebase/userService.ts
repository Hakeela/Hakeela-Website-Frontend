import { db } from "./firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { type UserProfile } from "../types";

export const saveUserProfile = async (uid: string, data: UserProfile) => {
  await setDoc(doc(db, "users", uid), data);
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  const docSnap = await getDoc(doc(db, "users", uid));
  return docSnap.exists() ? (docSnap.data() as UserProfile) : null;
};

export const sendOtp = async (email: string) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await setDoc(doc(db, "passwordResets", email), {
    otp,
    createdAt: new Date(),
    expiresAt: Date.now() + 10 * 60 * 1000, // 10 min
  });
  console.log(`OTP for ${email}: ${otp}`); // Show in console for dev/testing
};

export const verifyOtp = async (email: string, otp: string) => {
  const docRef = doc(db, "passwordResets", email);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return false;

  const data = docSnap.data();
  return data.otp === otp && Date.now() < data.expiresAt;
};

export const resetPassword = async (email: string, newPassword: string) => {
  const userRef = doc(db, "users", email);
  await updateDoc(userRef, { password: newPassword }); 
  // optional: actually call Firebase Auth updatePassword if logged in
};
