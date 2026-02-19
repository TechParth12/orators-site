import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCNZPrWcdUfjgvqNHU3YtxA65LQ5LAD-EU",
  authDomain: "Yorators-club-fd262.firebaseapp.com",
  projectId: "orators-club-fd262",
  storageBucket: "orators-club-fd262.firebasestorage.app",
  messagingSenderId: "947772371718",
  appId: "1:947772371718:web:db01003082e623183d2487"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)