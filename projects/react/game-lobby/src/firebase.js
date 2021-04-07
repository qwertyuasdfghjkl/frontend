import firebase from "firebase/app"
import "firebase/auth"
import "firebase/functions"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBTEYbUH8HDHL-wpnu27k6rD3_JzZN_2Nw",
  authDomain: "game-lobby-13650.firebaseapp.com",
  projectId: "game-lobby-13650",
  storageBucket: "game-lobby-13650.appspot.com",
  messagingSenderId: "456992775169",
  appId: "1:456992775169:web:07b7bed15bd3835899b400",
  measurementId: "G-R4J30G9XFD"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const func = firebase.functions();
export const storage = firebase.storage();
export default firebase;
