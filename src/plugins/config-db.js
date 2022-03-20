import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAL0yXmS_toEF5eGlnJ3vq2mmJqutrKimM",
  authDomain: "exam-2073a.firebaseapp.com",
  projectId: "exam-2073a",
  storageBucket: "exam-2073a.appspot.com",
  messagingSenderId: "758097365579",
  appId: "1:758097365579:web:e2d1d7e698d7a534e89bce",
  measurementId: "G-RS95S02575",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
