// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-stories-generator.firebaseapp.com",
  projectId: "ai-stories-generator",
  storageBucket: "ai-stories-generator.appspot.com",
  messagingSenderId: "699584472358",
  appId: "1:699584472358:web:0cdc0d9ba41c4b77d84de7",
  measurementId: "G-R3DCNB8700",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
