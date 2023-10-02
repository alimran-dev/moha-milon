// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLYFWdoi-SCGRpY0f4xeY-Ls-63OVQMAg",
  authDomain: "moha-milon-b93e4.firebaseapp.com",
  projectId: "moha-milon-b93e4",
  storageBucket: "moha-milon-b93e4.appspot.com",
  messagingSenderId: "165570277208",
  appId: "1:165570277208:web:266376e1a3d31bd559ff2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;