// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAKwUFgtUlGeiFIL8menvvOowPH2iX2dlY",
  authDomain: "manufacturer-project-82430.firebaseapp.com",
  projectId: "manufacturer-project-82430",
  storageBucket: "manufacturer-project-82430.appspot.com",
  messagingSenderId: "723052543337",
  appId: "1:723052543337:web:b1328023d683ed274351f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth