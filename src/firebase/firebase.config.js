// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyC3EHCIAf58J-44ipwu8m6vRWcEE6eleEQ",
  // authDomain: "photography-review-687cc.firebaseapp.com",
  // projectId: "photography-review-687cc",
  // storageBucket: "photography-review-687cc.appspot.com",
  // messagingSenderId: "644912551558",
  // appId: "1:644912551558:web:e5d015e5a3da5d9ca4a307",
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
