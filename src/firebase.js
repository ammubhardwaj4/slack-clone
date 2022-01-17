// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK0zO4yRucxlsccpWgyBKf3_67h2hdZEk",
  authDomain: "slack-clone-ecdd5.firebaseapp.com",
  projectId: "slack-clone-ecdd5",
  storageBucket: "slack-clone-ecdd5.appspot.com",
  messagingSenderId: "45484711195",
  appId: "1:45484711195:web:b3f89c8b8af019408787be",
  measurementId: "G-HJ1SYPB4RD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
