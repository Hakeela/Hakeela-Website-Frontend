import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { type UserProfile } from "../types";

export const saveUserProfile = async (uid: string, data: UserProfile) => {
  await setDoc(doc(db, "users", uid), data);
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  const docSnap = await getDoc(doc(db, "users", uid));
  return docSnap.exists() ? (docSnap.data() as UserProfile) : null;
};
