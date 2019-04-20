
import app from 'firebase/app'
//importing package responsible for all authentication
import 'firebase/auth';
// import {'dotenv'} from 'react';

  // Initialize Firebase
  var config = {
      //FIXME: ENV variables not transfering over, not imported correctly?
    apiKey: 'AIzaSyDXvrRc5eu1m-cY5UAJNEXqtf9o1V1sng4',
    authDomain: 'react-firebase-profile-mngmnt.firebaseapp.com',
    databaseURL: 'https://react-firebase-profile-mngmnt.firebaseio.com',
    projectId: 'react-firebase-profile-mngmnt',
    storageBucket: 'react-firebase-profile-mngmnt.appspot.com',
    messagingSenderId: '108284895325'
  };

//class encapsulation
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

// *** Authentication API for Firebase Class ***
  //creating user at sign up
  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

  //signing existing user in
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //sign out auuthenticated user
  doSignOut = () => this.auth.signOut();

  //reset password
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  //change password
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}

export default Firebase;
