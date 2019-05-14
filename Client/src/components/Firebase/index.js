import FirebaseContext, {withFirebase} from './context';//importing the .createContext() with two component default options set to null
import Firebase from './firebase';//importing the class created in firebase file

export default Firebase;
export { FirebaseContext, withFirebase };//knows to go to the top level
