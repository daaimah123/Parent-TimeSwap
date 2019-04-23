import React from 'react';
import { withAuthorization } from '../Session';

import * as ROLES from '../../constants/routes';

const Admin = () => (
  <div>
    <h1>Admin</h1>
    <p>
      Restricted area! Only users with the admin role are authorized.
    </p>
  </div>
);

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default withAuthorization(condition)(Admin);