// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNDw-ceN7KGv71mUBHrmuMmImyDLElCmg",
  authDomain: "portafoliojesusalonso.firebaseapp.com",
  projectId: "portafoliojesusalonso",
  storageBucket: "portafoliojesusalonso.appspot.com",
  messagingSenderId: "362696708791",
  appId: "1:362696708791:web:f9bcf57e5f13cd63243332",
  measurementId: "G-E0Z7X512W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);