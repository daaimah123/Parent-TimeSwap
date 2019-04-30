import React from 'react';
import { withFirebase } from '../Firebase';

import PasswordForgetFormBase from './PasswordForgetFormBase';

//FIXME: ********* not in public authorization should be accessible to nonauthenticated parties ********

const PasswordForget = () => (
    <div>
        <h1>Password Forget</h1>
        <PasswordForgetForm />

    </div>
)




const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export default PasswordForget;
export {PasswordForgetForm};
