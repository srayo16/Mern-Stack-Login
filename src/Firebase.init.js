// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBghsRzGlZv_N0Uf9b5yf8b9uumPK1n3OQ",
    authDomain: "mern-stack-login-df4ac.firebaseapp.com",
    projectId: "mern-stack-login-df4ac",
    storageBucket: "mern-stack-login-df4ac.appspot.com",
    messagingSenderId: "273329630968",
    appId: "1:273329630968:web:56ce026f36bdfe1039150d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;