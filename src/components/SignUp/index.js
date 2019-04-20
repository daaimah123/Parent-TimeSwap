import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose';

//router props accessible to component props
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';


class SignUp extends React.Component {
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <SignUpForm />>
            </div>
        )
    }
}

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpFormBase extends React.Component {
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE}
    }

    onSubmit = event => {
        //both passwords will be the same, so only one is needed
        const { username, email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME)
            })
            .catch(error => {
            this.setState({ error });
            });
    
        event.preventDefault();
    }
    
    onChange = event => {
         /* input name field: input value - onChange handler will take input and change state */
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const {username,email,passwordOne,passwordTwo,error} = this.state;
        //states in which the submit button will not be enabled
        const isInvalid = 
        // FIXME: if password doesnt contain @
        //TODO: make password maximum 10 characters, need to have one symbol char and num char and uppercase char
        //both passwords must be the same && password, email or username cannot be blank
        passwordOne !== passwordTwo || passwordOne === '' || 
        email === '' || username === '';
        
        return (
            <form onSubmit={this.onSubmit}>
           
                <input 
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Frist & Last Name"
                />
                <input 
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input 
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type='password'
                    placeholder='Enter Password'
                />
                <input 
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder='Confirm Password'
                />
                <button disabled={isInvalid} type='submit'>Sign Up</button>
                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

class SignUpLink extends React.Component{
    render(){
        return(
            <p>Pssst! Sign Up Here => 
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </p>
        )
    }
}
//history object within router props accessed in withRouter() allows redirection of user to another page
const SignUpForm = compose(
    withRouter, withFirebase
    )(SignUpFormBase)

export default SignUp;

export { SignUpForm,SignUpLink };
