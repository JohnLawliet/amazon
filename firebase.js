// this is for using firebase v8. v9 has different syntax
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBU7_krQjoWU7YwjVdJdJeGD_QZUUIuDdk",
    authDomain: "fir-80806.firebaseapp.com",
    projectId: "fir-80806",
    storageBucket: "fir-80806.appspot.com",
    messagingSenderId: "750639923476",
    appId: "1:750639923476:web:d13e9077873d9d7fae4201"
};

// to protect from double initializing the firebase app
const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app()

const db = app.firestore()

export default db