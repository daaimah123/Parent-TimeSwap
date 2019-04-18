//importing the .createContext() with two component default options set to null
import FirebaseContext from './context';
//importing the class created in firebase file
import Firebase from './firebase';

export default Firebase;
//knows to go to the top level
export { FirebaseContext };