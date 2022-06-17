// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLLIrYi7ejb6vVY7ABsjRY8fdbJPunnTY",
    authDomain: "aweteck-task.firebaseapp.com",
    projectId: "aweteck-task",
    storageBucket: "aweteck-task.appspot.com",
    messagingSenderId: "142767763144",
    appId: "1:142767763144:web:74706cbfa58faa8151bffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth