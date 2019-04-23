import React from 'react';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';

const PasswordForget = () => (
    <div>
        <h1>Password Forget</h1>
    </div>
)

const INITIAL_STATE={
    email: '',
    error: null
}

class PasswordForgetFormBase extends React.Component{
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const { email } = this.state;
        this.props.firebase
        .doPasswordReset(email)
        .then(()=>
            this.setState({...INITIAL_STATE})
        )
        event.preventDefault();
    }

    onChange = event => {
        this.setState({
        [event.target.name] : event.target.value
        })
    }

    render(){
        const { email, error } = this.state;
        const isInvalid = email === '';

        return(
            <form onSubmit={this.onSubmit}>
                <input 
                name = "email"
                value={email}
                onChange={this.onChange}
                type='text'
                placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit">Reset Password</button>
                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

/* ================= PASSWORD FORGET LINK ================= */
const PasswordForgetLink = () => (
        <Link to={ROUTES.FORGET_PASSWORD}>Forget Password?</Link>
)


const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export default PasswordForget;

export { PasswordForgetForm, PasswordForgetLink };