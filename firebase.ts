import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYdQgIxa_y5R1s7ztE2DTx4hRi-JxcKEg",
  authDomain: "chatgpt-messenger-6ab57.firebaseapp.com",
  projectId: "chatgpt-messenger-6ab57",
  storageBucket: "chatgpt-messenger-6ab57.appspot.com",
  messagingSenderId: "459157034776",
  appId: "1:459157034776:web:c5598a4433386bd9a9306d"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }