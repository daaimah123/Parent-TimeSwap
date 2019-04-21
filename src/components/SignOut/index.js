import React from 'react';
import { withFirebase } from '../Firebase';
import { Button} from 'semantic-ui-react';


// const SignOut =() => (
//             <div>
//                 <h1>Sign Out</h1>
//             </div>
//         )

const SignOutButton = ({firebase}) => (
    <Button color='teal' fluid size='large' type='button' onClick={firebase.doSignOut}>Sign Out</Button>
)

// export default SignOut;
export default withFirebase(SignOutButton);