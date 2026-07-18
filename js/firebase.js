import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDy3woJe3UcggwiJhfYqQohZrDFadNlj1g",
  authDomain: "trustify-f324e.firebaseapp.com",
  projectId: "trustify-f324e",
  storageBucket: "trustify-f324e.firebasestorage.app",
  messagingSenderId: "952055889025",
  appId: "1:952055889025:web:a667882a6249c979f32180"
};
// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy3woJe3UcggwiJhfYqQohZrDFadNlj1g",
  authDomain: "trustify-f324e.firebaseapp.com",
  projectId: "trustify-f324e",
  storageBucket: "trustify-f324e.firebasestorage.app",
  messagingSenderId: "952055889025",
  appId: "1:952055889025:web:a667882a6249c979f32180",
  measurementId: "G-0ET919LLJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);