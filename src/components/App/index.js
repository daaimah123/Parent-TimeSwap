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

//importing all url routes in from routes file
import * as ROUTES from '../../constants/routes';
import { withFirebase } from  '../Firebase'; 

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            authUser: null
        }; 
    }

    componentDidMount(){
        //.onAuthStateChanged() has access to authenticated users, happens each time a user signs up, in or out
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
            ? this.setState({authUser})
            : this.setState({authUser:null})
        })
    }

    componentWillUnmount(){
        this.listener();
    }
    
    render() {
        return (
            <Router>
                <div>
                    <Navigation authUser={this.state.authUser}/>
                    
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
                </div>
            </Router>
        )
    }
}

export default withFirebase(App);