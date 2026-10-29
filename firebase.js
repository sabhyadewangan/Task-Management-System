
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBsr0ZNHcbbeVnBG2gW_ZNebKfHfG1bpc",
  authDomain: "taskmanagementsystem-61fea.firebaseapp.com",
  projectId: "taskmanagementsystem-61fea",
  storageBucket: "taskmanagementsystem-61fea.firebasestorage.app",
  messagingSenderId: "143269192628",
  appId: "1:143269192628:web:e9d3e75bf8346f0f9e48e1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
