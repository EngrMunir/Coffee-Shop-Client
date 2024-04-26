// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtR1LJ4LxWgRaSZU4clXl_Yx4ZRn6VN14",
  authDomain: "coffee-shop-v1-3f5af.firebaseapp.com",
  projectId: "coffee-shop-v1-3f5af",
  storageBucket: "coffee-shop-v1-3f5af.appspot.com",
  messagingSenderId: "1041583296481",
  appId: "1:1041583296481:web:7ab13d33e5593c5d920ca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;