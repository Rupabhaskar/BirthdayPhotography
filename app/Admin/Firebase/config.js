// // Firebase config
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBfFLRyDWDFyK84MONBRvuATH50ph15y_Q",
//   authDomain: "birthdaysnapu.firebaseapp.com",
//   projectId: "birthdaysnapu",
//   storageBucket: "birthdaysnapu.appspot.com",
//   messagingSenderId: "167811518920",
//   appId: "1:167811518920:web:fd30b97a5301f255f430fd",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// ---------------------------------------------------------------------


// Firebase config
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyAUpzc5mKRUnBLCJObce9oUqr2jnPb34Ag",
  authDomain: "birthdaysnapu-80eb0.firebaseapp.com",
  projectId: "birthdaysnapu-80eb0",
  storageBucket: "birthdaysnapu-80eb0.firebasestorage.app",
  messagingSenderId: "139336747775",
  appId: "1:139336747775:web:6c85ffa2edb4866c9edaca",
  measurementId: "G-HFXMFS0JFM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
