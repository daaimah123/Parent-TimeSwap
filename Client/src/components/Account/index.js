import React from 'react';
import {SearchAvailabilityLink} from '../SearchAvailability/index.js.js';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import {AuthUserContext, withAuthorization} from '../Session';


const Account = () => (
  <div>
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Welcome back to your account {authUser.email}!</h1>
                {/* forget password form */}
                <PasswordForgetForm /> 
                {/* change user password form */}
                <PasswordChangeForm />
                <SearchAvailabilityLink />
            </div>
        )}
    </AuthUserContext.Consumer>
  </div>
  
);

const condition = authUser => authUser != null;

export default withAuthorization(condition)(Account);