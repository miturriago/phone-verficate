import * as firebase from "firebase";
import "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCj_fC5AlEvbasmz1zJd3TRFAR4cqggvE4",
  authDomain: "phone-verficate.firebaseapp.com",
  databaseURL: "https://phone-verficate.firebaseio.com",
  projectId: "phone-verficate",
  storageBucket: "phone-verficate.appspot.com",
  messagingSenderId: "751795105057",
  appId: "1:751795105057:web:22e37fad1ba263e926e260",
  measurementId: "G-JVXL55M6RB",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
