import { initializeApp} from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDBH5dTei0Rj15hHMxJCehLFrJ6HkbREVs",
    authDomain: "martins-991d7.firebaseapp.com",
    projectId: "martins-991d7",
    storageBucket: "martins-991d7.appspot.com",
    messagingSenderId: "347514756467",
    appId: "1:347514756467:web:842e5dd12f69c1a5413906",
    measurementId: "G-3C19MX3MS8"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebaseApp);

