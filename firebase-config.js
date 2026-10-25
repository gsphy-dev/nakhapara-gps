// Nakhapara GPS - Cloud Active for GitHub Pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDemoKeyForNakhaparaGPS",
  authDomain: "nakhapara-gps.firebaseapp.com",
  projectId: "nakhapara-gps",
  storageBucket: "nakhapara-gps.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:demo123456"
};

let app, db, auth;
try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
} catch(e){ db = {}; auth = {}; }

window.firebaseReady = true;
window.firebaseConfigLoaded = true;
window.firebaseDb = db;
export { app, db, auth };