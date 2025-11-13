// Firebase configuration file
// Auto-generated for herij-smart project

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD8KAKDzrOgsMUsiTSk3CFJKYsWJxDUQo",
  authDomain: "herij-smart.firebaseapp.com",
  projectId: "herij-smart",
  storageBucket: "herij-smart.firebasestorage.app",
  messagingSenderId: "7835985843676",
  appId: "1:7835985843676:web:dc0cc53018f353d67b7439",
  measurementId: "G-LK8VFFQ2YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
