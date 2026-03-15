// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLNuJ9-jBkF3Krwc9z0RTjLrF8u4aIG40",
  authDomain: "bistro-boss-ab033.firebaseapp.com",
  projectId: "bistro-boss-ab033",
  storageBucket: "bistro-boss-ab033.firebasestorage.app",
  messagingSenderId: "475571423917",
  appId: "1:475571423917:web:1f78c8d12042fab8f35424",
  measurementId: "G-R750ETN0XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);