// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import authentication module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZCl0XIAw7pENdwq0FUxRxBO80B-evNAM",
  authDomain: "dashboard-in-react-3f970.firebaseapp.com",
  projectId: "dashboard-in-react-3f970",
  storageBucket: "dashboard-in-react-3f970.firebasestorage.app",
  messagingSenderId: "741732788084",
  appId: "1:741732788084:web:eea4159a799eca21fc2e21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
