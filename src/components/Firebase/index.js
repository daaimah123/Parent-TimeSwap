import React from 'react';

//importing the .createContext() with two component default options set to null
import FirebaseContext from './context';
//importing the class
import Firebase from './firebase';

class Firebase extends React.Component {
    render() {
        return (
            <div>
                <h1>Firebase</h1>
            </div>
        )
    }
}

export default Firebase;
//knows to go to the top level, will need to place Firebase class next to it for use
export { FirebaseContext };