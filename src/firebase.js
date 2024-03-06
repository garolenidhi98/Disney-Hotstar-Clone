import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDWhoKFBXw1rq3nHQfnKQiVGZ5v4WX8TVU",
    authDomain: "disney-hotstar-clone-4109b.firebaseapp.com",
    projectId: "disney-hotstar-clone-4109b",
    storageBucket: "disney-hotstar-clone-4109b.appspot.com",
    messagingSenderId: "265830931538",
    appId: "1:265830931538:web:206e027115c81df38dd38b",
    measurementId: "G-DR0EYHPDNB"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
