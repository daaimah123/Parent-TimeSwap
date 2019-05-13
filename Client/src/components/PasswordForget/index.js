import React from 'react';
import { withFirebase } from '../Firebase';

import PasswordForgetFormBase from './PasswordForgetFormBase';

const PasswordForget = () => (
    <div>
        <PasswordForgetForm />

    </div>
)




const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export default PasswordForget;
export {PasswordForgetForm};
