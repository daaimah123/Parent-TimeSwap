import React from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'


/* ================= PASSWORD FORGET LINK ================= */
const PasswordForgetLink = () => (
        <Link to={ROUTES.FORGET_PASSWORD}>Forget or Change Password</Link>
)

export default PasswordForgetLink;
