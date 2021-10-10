
import { initializeApp } from 'firebase/app';
import 'firebase/auth';//importing package responsible for all authentication

  // Initialize Firebase
  var config = {
    apiKey: process.env.REACT_APP_API_KEY,//can be public according to firebase docs.
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  };

//class encapsulation
class Firebase {
    constructor() {
      const app = initializeApp(config);
        this.auth = app.auth; //authentication
    }

/*** =============== Authentication API =============== ***/
  //creating user at sign up
  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

  //signing existing user in
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //sign out authenticated user
  doSignOut = () => this.auth.signOut();

  //reset password
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  //change password
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
