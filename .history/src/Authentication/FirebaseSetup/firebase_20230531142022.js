// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "unrelo-23b2c.firebaseapp.com",
  projectId: "unrelo-23b2c",
  storageBucket: "unrelo-23b2c.appspot.com",
  messagingSenderId: "330827985359",
  appId: "1:330827985359:web:2cd6e99cb832c133a762ba",
  measurementId: "G-X83KR5896E",
  databaseURL: "https://unrelo-23b2c-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

//Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default app;
