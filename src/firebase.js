import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBnAh8RUUSrljHcSbLNq6sFCw7L2VQBA8k",
  authDomain: "clone-a1114.firebaseapp.com",
  projectId: "clone-a1114",
  storageBucket: "clone-a1114.appspot.com",
  messagingSenderId: "950638968071",
  appId: "1:950638968071:web:c277e239e7f5515f2919a2",
  measurementId: "G-XLTW5X1VHK"
});

const auth = firebase.auth();

export { auth } 