import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDQBU3gRwWwR6SnzLFx6gwEjvvzw7rlvEA",
    authDomain: "university-site-a0db0.firebaseapp.com",
    projectId: "university-site-a0db0",
    storageBucket: "university-site-a0db0.appspot.com",
    messagingSenderId: "95202426015",
    appId: "1:95202426015:web:85afad94de8fd3b801f6aa"
  };


  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  export {db}
  export const auth = getAuth();
  const storage = getStorage(app);
export default storage;