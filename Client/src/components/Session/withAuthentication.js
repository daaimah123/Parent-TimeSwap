import React from 'react';
import { withFirebase } from  '../Firebase'; 
//importing authenticated user through context and not component tree directly
import { AuthUserContext } from '../Session';

//session handling for authenticated user in separate component
const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                authUser: null
            }; 
        }

        componentDidMount(){
            //.onAuthStateChanged() has access to authenticated users, happens each time a user signs up, in or out
            this.listener = this.props.firebase.auth().onAuthStateChanged(authUser => {
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
                // can now give authenticated user to whichever component necessary
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props}/>;
                </AuthUserContext.Provider>
            )
        }
    }
    return withFirebase(WithAuthentication)
}

export default withAuthentication
