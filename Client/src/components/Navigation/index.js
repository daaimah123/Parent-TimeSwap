import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
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
     <Navbar bg="info">
        <Nav className="mr-auto">
            <Nav.Link>
                <Link to={ROUTES.LANDING} style={{ color: '#FFF', fontSize: '17px'}}><strong>Landing   | </strong></Link>
            </Nav.Link>
            
            <Nav.Link >
                <Link to={ROUTES.HOME} style={{ color: '#FFF', fontSize: '17px'}}><strong>  Home   | </strong></Link>
            </Nav.Link>
            <Nav.Link> 
                <Link to={ROUTES.ABOUT} style={{ color: '#FFF', fontSize: '17px'}}><strong>About   | </strong></Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={ROUTES.SEARCH_AVAILABILITY} style={{ color: '#FFF', fontSize: '17px'}}><strong>Search Availability    | </strong></Link>
            </Nav.Link>
            <Nav.Link >
                <SignOutButton />
            </Nav.Link>
            {/* <Nav.Link >
                <Link to={ROUTES.ACCOUNT} style={{ color: '#FFF' }}>Account</Link>
            </Nav.Link> */}
        </Nav>
    </Navbar>
);

const NavigationNonAuth = () => (
    <Navbar bg="info">
        <Nav className="mr-auto">
            <Nav.Link>
                <Link to={ROUTES.LANDING} style={{ color: '#FFF', fontSize: '17px'}}>Landing   | </Link>
            </Nav.Link>
            <Nav.Link >
                <Link to={ROUTES.SIGN_IN} style={{ color: '#FFF' }}>Sign In   | </Link>
            </Nav.Link>
            
            <Nav.Link> 
                <Link to={ROUTES.ABOUT} style={{ color: '#FFF' }}>About</Link>
            </Nav.Link>
        </Nav>
    </Navbar>
)

export default Navigation;