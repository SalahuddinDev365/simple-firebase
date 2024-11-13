// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB395PnuChT5jf8Cg__OSTVIB48Z-FTX2I",
  authDomain: "simple-firebase2-82e65.firebaseapp.com",
  projectId: "simple-firebase2-82e65",
  storageBucket: "simple-firebase2-82e65.firebasestorage.app",
  messagingSenderId: "512824518052",
  appId: "1:512824518052:web:1f2f0f0cc3c8ee0e284d31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);