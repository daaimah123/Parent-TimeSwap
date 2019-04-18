
import app from 'firebase/app'
//importing package responsible for all authentication
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  };

//class encapsulation
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
}

export default Firebase;
