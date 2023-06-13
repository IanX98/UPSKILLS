import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDM7WX9NFG9az1ZrHZsvJ1AJIel4kYUr1A",
    authDomain: "up-skills-27754.firebaseapp.com",
    projectId: "up-skills-27754",
    storageBucket: "up-skills-27754.appspot.com",
    messagingSenderId: "802669009545",
    appId: "1:802669009545:web:2aba14b29b1a0cf3508458"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// const storage = firebase.storage()

// export { auth, provider, storage };
export { auth, provider };
export default db;
