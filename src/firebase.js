// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8Ycy-8sW6rvvTiwWmeEs0gLX9s18xkak",
  authDomain: "galleryapp-3be73.firebaseapp.com",
  projectId: "galleryapp-3be73",
  storageBucket: "galleryapp-3be73.appspot.com",
  messagingSenderId: "149773445697",
  appId: "1:149773445697:web:249a46fe69b6f39985f4c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
