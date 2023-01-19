import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD__0WkzQ90GiCFuHYjgq5yVNkFnx-PdWo",
  authDomain: "marico-ed430.firebaseapp.com",
  databaseURL: "https://marico-ed430-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "marico-ed430",
  storageBucket: "marico-ed430.appspot.com",
  messagingSenderId: "849513933318",
  appId: "1:849513933318:web:888a04e35f32861f50f187",
  measurementId: "G-VBVTCQN9HF"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
