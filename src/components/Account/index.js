import React from 'react';
import {SearchAvailabilityLink} from '../SearchAvailability/index.js';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import {AuthUserContext, withAuthorization} from '../Session';


const Account = () => (
  <div>
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Account: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
                <SearchAvailabilityLink />
            </div>
        )}
    </AuthUserContext.Consumer>
  </div>
  
);

const condition = authUser => authUser != null;

export default withAuthorization(condition)(Account);