import { initializeApp } from "firebase/app";
import type { FirebaseApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";

// Great example of firebase config in sveltekit
// https://github.com/khromov/firebase-sveltekit-chat/blob/master/src/lib/firebase.ts
// use for guidance if I ever need to use emulators

export const firebaseConfig = {
    apiKey: "AIzaSyCbq-7mSEdLLrUslDNDBpXQMtdDiA_Fgtc",
    authDomain: "goodcallcopywriting.firebaseapp.com",
    projectId: "goodcallcopywriting",
    storageBucket: "goodcallcopywriting.appspot.com",
    messagingSenderId: "628535234262",
    appId: "1:628535234262:web:6fa3efe7a5f6748df20377",
    measurementId: "G-NP60WG1JGV"
};

let app: FirebaseApp;

export let auth: any;
export let analytics: any;
export let storage: any;
export let functions: any = {};

export const initialiseFirebase = () => {
    // console.log('🔥 Initialising Firebase App');
    app = initializeApp(firebaseConfig);
}

export const initialiseAnalytics = () => {
    // console.log('🔥 Initialising Google Analytics');
    analytics = getAnalytics(app);
}

export const initialiseAuth = () => {
    // console.log('🔥 Creating Anonymous Sign In');
    auth = getAuth();
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
        console.log('signed in!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error({errorCode, errorMessage});
        // ...
    });
};

export const initialiseStorage = () => {
    // console.log('🔥 Initialising Firebase Storage');
    storage = getStorage(app);
}

export const initialiseFunctions = () => {
    // console.log('🔥 Initialising Firebase Functions');
    let _functions = getFunctions(app, "australia-southeast1");
    functions.contactForm = httpsCallable(_functions, "contactForm");
    functions.createJob = httpsCallable(_functions, "createJob");
}