// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6LJHW63vlK6vNQOFt_-QGn8jWIvzCRWg",
    authDomain: "book--bridge.firebaseapp.com",
    projectId: "book--bridge",
    storageBucket: "book--bridge.firebasestorage.app",
    messagingSenderId: "52786369950",
    appId: "1:52786369950:web:19cb39b9db1ac82af7b28f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);