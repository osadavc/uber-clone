import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// C-spell:disable
const firebaseConfig = {
  apiKey: "AIzaSyCOsPRzMFL6SY_n8vLmJNc--ffH1ywqfCo",
  authDomain: "uber-clone-281a2.firebaseapp.com",
  projectId: "uber-clone-281a2",
  storageBucket: "uber-clone-281a2.appspot.com",
  messagingSenderId: "930437037690",
  appId: "1:930437037690:web:fc703f21e3a0cad5f445c3",
};
// C-spell:enable

initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth();

export { googleAuthProvider, auth };
