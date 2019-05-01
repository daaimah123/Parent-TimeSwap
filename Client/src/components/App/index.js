import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//importing components from index.js files within component directories
//THESE ARE PAGES VARIABLES = lowercase
import Navigation from '../Navigation';

import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import Home from '../Home';
import Account from '../Account';
import Admin from '../Admin';
import About from '../About';
import SearchAvailability from '../SearchAvailability';
import AccountSetUp from '../AccountSetUp';
import RequestContact from '../RequestContact/index';
import Chat from '../Chat/index';

//importing all url routes in from routes file
import * as ROUTES from '../../constants/routes';
//make authenticated users available to all components
import { withAuthentication } from '../Session'; 

const App = () => (
            <Router>
                <div>
                    {/* Navigation now uses the context to get the authenticated user */}
                    <Navigation/>
                    
                    <hr />
                    {/* CREATING PAGE NAVIGATION WITH ROUTES: notice that the paths are the link-to's from navigation component and components props are pointing to their respective component content  */}
                    <Route exact path={ROUTES.LANDING} component={Landing}/>
                    <Route path={ROUTES.SIGN_UP} component={SignUp}/>
                    <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                    <Route path={ROUTES.FORGET_PASSWORD} component={PasswordForget}/>
                    <Route path={ROUTES.HOME} component={Home}/>
                    <Route path={ROUTES.ACCOUNT} component={Account}/>
                    <Route path={ROUTES.ACCOUNT_SET_UP} component={AccountSetUp}/>
                    <Route path={ROUTES.ADMIN} component={Admin}/>
                    <Route path={ROUTES.ABOUT} component={About}/>
                    <Route path={ROUTES.SEARCH_AVAILABILITY} component={SearchAvailability}/>
                    <Route path={ROUTES.REQUEST_CONTACT} component={RequestContact}/>
                    <Route path={ROUTES.CHAT} component={Chat}/>
                </div>
            </Router>
        )

export default withAuthentication(App);