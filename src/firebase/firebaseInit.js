import firebase from 'firebase/app'
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyBo9Kj5v7DL1st8SUXKoxghvypGSVjx_Pc",
    authDomain: "invoice-app-6356b.firebaseapp.com",
    projectId: "invoice-app-6356b",
    storageBucket: "invoice-app-6356b.appspot.com",
    messagingSenderId: "592039917964",
    appId: "1:592039917964:web:11766a95487009df5fbea9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()