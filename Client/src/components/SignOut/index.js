import React from 'react';
import { withFirebase } from '../Firebase';
// import { Button} from 'semantic-ui-react';

const SignOutButton = ({firebase}) => (
    <button  type='button' onClick={firebase.doSignOut}>Sign Out</button>
)

// export default SignOut;
export default withFirebase(SignOutButton);