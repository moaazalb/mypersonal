// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth" 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAUmWylXdglNtdKcAro_0c6Bn1hPXNIliA",
  authDomain: "info-865e3.firebaseapp.com",
  projectId: "info-865e3",
  storageBucket: "info-865e3.appspot.com",
  messagingSenderId: "328560866840",
  appId: "1:328560866840:web:1e5be90474c96e4ca6f56d"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
