import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAN6BrzWq63NDIfIDgOkyi0OSKUEdNPcfI",
  authDomain: "react-router-firestore.firebaseapp.com",
  databaseURL: "https://react-router-firestore.firebaseio.com",
  projectId: "react-router-firestore",
  storageBucket: "react-router-firestore.appspot.com",
  messagingSenderId: "879025554208",
  appId: "1:879025554208:web:b39002bd68c27250d60d45",
};

type Config = Parameters<typeof firebase.initializeApp>[0];

class CustomFuego {
  public db: ReturnType<typeof firebase.firestore>;
  public auth: typeof firebase.auth;
  public functions: typeof firebase.functions;
  public storage: typeof firebase.storage;

  constructor(config: Config) {
    this.db = !firebase.apps.length
      ? firebase.initializeApp(config).firestore()
      : firebase.app().firestore();
    this.auth = firebase.auth;
    this.functions = firebase.functions;
    this.storage = firebase.storage;
  }
}

const fuego = new CustomFuego(FIREBASE_CONFIG);

export default fuego;
