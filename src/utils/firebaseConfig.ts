// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYKE7h5ik3PZ6bapnvjzNmepDyIQqiYFQ",
  authDomain: "ai-mass-reporting.firebaseapp.com",
  projectId: "ai-mass-reporting",
  storageBucket: "ai-mass-reporting.firebasestorage.app",
  messagingSenderId: "685933823271",
  appId: "1:685933823271:web:2c25b8f1a4ec516dbed502",
  measurementId: "G-D3FSW6GLJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app object
export { app };