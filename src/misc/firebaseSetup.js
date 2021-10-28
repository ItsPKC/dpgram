// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const {
  initializeAppCheck,
  ReCaptchaV3Provider,
} = require("firebase/app-check");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCwfbiLJ9gEjub_XN0mieAHmzznB9peSHE",
  authDomain: "dp-gram.firebaseapp.com",
  projectId: "dp-gram",
  storageBucket: "dp-gram.appspot.com",
  messagingSenderId: "948776457889",
  appId: "1:948776457889:web:e909d00527b89bdd9202e0",
  measurementId: "G-XSLHNCYVWG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FBfunction = getFunctions(app);
export const FBfirestore = getFirestore(app);
export const FBstorage = getStorage(app);
export const FBauth = getAuth(app);

getAnalytics(app);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
export const appCheck = initializeAppCheck(app, {
  // This value is registered in Recapcha admin
  provider: new ReCaptchaV3Provider("6LfZnvEcAAAAAFOi9TFnEmoqOX-Ew54wPPKWDyYw"),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

// Storage App Check finished Just call it to start.
// Note: Firebase Function App Check is not completed
// https://firebase.google.com/docs/app-check/web/recaptcha-provider?authuser=1
// https://firebase.google.com/docs/app-check/cloud-functions?authuser=1
