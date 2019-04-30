import React from 'react';

//importing Link component from router-dom to create navigation links
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';

//importing all url routes in from routes file
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

 /* Navigation now uses the context to get the authenticated user */
const Navigation = () => (
    <div> 
        <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </AuthUserContext.Consumer>
    </div>
)
const NavigationAuth = () =>(
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li> 
            <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        <li>
            <Link to={ROUTES.SEARCH_AVAILABILITY}>Search Availability</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        {/* <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
        </li> */}
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        
        <li> 
            <Link to={ROUTES.ABOUT}>About</Link>
        </li>
    </ul>
)

export default Navigation;