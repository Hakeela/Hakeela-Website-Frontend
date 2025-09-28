import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvHrNcFD0VRgTmlmHxFeiLhsd0FDReT5k",
  authDomain: "hakeela-website.firebaseapp.com",
  projectId: "hakeela-website",
  storageBucket: "hakeela-website.firebasestorage.app",
  messagingSenderId: "872106845381",
  appId: "1:872106845381:web:98cbaa98094d25da607cac"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);