import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
 	apiKey: "AIzaSyAJuwZ0XlJ1PZLd_PCclhNudRz8dYY5qrQ",
  authDomain: "catch-of-the-day-kylejson.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kylejson-default-rtdb.firebaseio.com/"
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp}

export default base;