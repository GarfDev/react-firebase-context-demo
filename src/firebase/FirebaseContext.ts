import firebase from "firebase";
import { createContext } from "react";

type firebaseApp = firebase.app.App;

const FirebaseContext = createContext({} as firebaseApp);

export default FirebaseContext;
