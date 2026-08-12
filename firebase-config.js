// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV7QVLZBK1stK6A2yHXWZSvc355jt5Bw0",
  authDomain: "ai-training-repo1.firebaseapp.com",
  projectId: "ai-training-repo1",
  storageBucket: "ai-training-repo1.firebasestorage.app",
  messagingSenderId: "995721505804",
  appId: "1:995721505804:web:5c731b0497cabf8bda9229",
  measurementId: "G-7PSC28CDBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export the auth instances for use in index.html
export { auth, googleProvider, signInWithPopup, signOut };
