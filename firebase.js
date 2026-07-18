import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDy3woJe3UcggwiJhfYqQohZrDFadNlj1g",
  authDomain: "trustify-f324e.firebaseapp.com",
  projectId: "trustify-f324e",
  storageBucket: "trustify-f324e.firebasestorage.app",
  messagingSenderId: "952055889025",
  appId: "1:952055889025:web:a667882a6249c979f32180",
  measurementId: "G-0ET919LLJP"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase Connected!");