// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7PX5ybadcF59XPWVkw3X5yKNpRsn1UGo",
  authDomain: "todoapp-5a980.firebaseapp.com",
  projectId: "todoapp-5a980",
  storageBucket: "todoapp-5a980.firebasestorage.app",
  messagingSenderId: "610555051098",
  appId: "1:610555051098:web:29760cfa47173cb31bec63",
  measurementId: "G-BYPS5RLL5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);