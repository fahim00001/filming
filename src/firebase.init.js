// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQNsVLyIli-tw1ZkE7w90PDyu4c_A6NJM",
  authDomain: "cine-spark01.firebaseapp.com",
  projectId: "cine-spark01",
  storageBucket: "cine-spark01.appspot.com",
  messagingSenderId: "435221472328",
  appId: "1:435221472328:web:8251a722110090c5a7a47d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;