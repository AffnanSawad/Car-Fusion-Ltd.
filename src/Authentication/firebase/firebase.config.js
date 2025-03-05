// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjmuMHiRY_rRkWT28Pd62XOpTVM7LKVMg",
  authDomain: "car-fusion-ltd.firebaseapp.com",
  projectId: "car-fusion-ltd",
  storageBucket: "car-fusion-ltd.firebasestorage.app",
  messagingSenderId: "577720358346",
  appId: "1:577720358346:web:1ef95e3d56b74a98ff6b33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;
