import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbQGz_M-q3Cs1zoUI1wYPPljP_7mSgJ7A",
  authDomain: "cbit-stack.firebaseapp.com",
  projectId: "cbit-stack",
  storageBucket: "cbit-stack.appspot.com",
  messagingSenderId: "474999650243",
  appId: "1:474999650243:web:d738e17e71f72898d92f76",
  measurementId: "G-JGXHTQP9KE"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();
const facebookprovider = new FacebookAuthProvider();

export { auth, googleprovider,githubprovider,facebookprovider };
// export default db;
