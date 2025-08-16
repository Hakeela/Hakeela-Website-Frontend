import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import type { UserProfile } from "../types";


export const signUp = async (
  email: string,
  password: string,
  profileData: Omit<UserProfile, "email">
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    email,
    ...profileData
  });

  return user;
};

export const logIn = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const logOut = async (): Promise<void> => {
  await signOut(auth);
};
