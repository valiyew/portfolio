import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5FD5InROS0XOJRa3YihYYD1Zt2No1Y0Y",
  authDomain: "fir-resume-44f31.firebaseapp.com",
  projectId: "fir-resume-44f31",
  storageBucket: "fir-resume-44f31.firebasestorage.app",
  messagingSenderId: "386146595637",
  appId: "1:386146595637:web:36392f9c66db2eff5e127c",
  measurementId: "G-HCB8VEH8K4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
