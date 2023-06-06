import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "api_key",
    authDomain: "unrelo-23b2c.firebaseapp.com",
    databaseURL: "https://unrelo-23b2c-default-rtdb.firebaseio.com",
    projectId: "unrelo-23b2c",
    storageBucket: "unrelo-23b2c.appspot.com",
    messagingSenderId: "330827985359",
    appId: "1:330827985359:web:2cd6e99cb832c133a762ba",
    measurementId: "G-X83KR5896E"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
