import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXq6_EVRmrDSJZfcson7j4zAz1nHZE3SM",
  authDomain: "facebook-clone-b35f2.firebaseapp.com",
  databaseURL: "https://facebook-clone-b35f2.firebaseio.com",
  projectId: "facebook-clone-b35f2",
  storageBucket: "facebook-clone-b35f2.appspot.com",
  messagingSenderId: "1048864445755",
  appId: "1:1048864445755:web:507da15c11df4705a4d31e",
  measurementId: "G-8X5JK6CW1N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;