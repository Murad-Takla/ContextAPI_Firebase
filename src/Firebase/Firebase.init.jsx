// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKK_JdK0Y_2XjyigP92hVqJomFtlecbKo",
  authDomain: "my-context.firebaseapp.com",
  projectId: "my-context",
  storageBucket: "my-context.appspot.com",
  messagingSenderId: "1054867419032",
  appId: "1:1054867419032:web:43f24ef2e02d62418045ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app