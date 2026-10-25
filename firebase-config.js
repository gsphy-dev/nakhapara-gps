// নখাপাড়া সরকারি প্রাথমিক বিদ্যালয় - Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCJXg1LAKRgfQzSekLigeQQovgSiWCbw",
  authDomain: "nakhapara-gps.firebaseapp.com",
  projectId: "nakhapara-gps",
  storageBucket: "nakhapara-gps.firebasestorage.app",
  messagingSenderId: "844523364530",
  appId: "1:844523364530:web:a4776518c0d37b2b9829ab"
};

// Firebase Initialize
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Global করে দেওয়া যাতে অন্য ফাইল ব্যবহার করতে পারে
window.firebaseDB = db;
window.firebaseConfigLoaded = true;
console.log("✅ Firebase Connected - নখাপাড়া");