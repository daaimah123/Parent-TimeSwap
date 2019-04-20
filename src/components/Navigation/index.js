import React from 'react';

//importing Link component from router-dom to create navigation links
import { Link } from 'react-router-dom';

//importing all url routes in from routes file
import * as ROUTES from '../../constants/routes';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={ROUTES.LANDING}>Landing</Link>
                    </li>
                    <li>
                       <Link to={ROUTES.SIGN_IN}>Sign In</Link>
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
                    <li>
                        <Link to={ROUTES.ADMIN}>Admin</Link>
                    </li>
                    
                </ul>
            </div>
        )
    }
}

export default Navigation;