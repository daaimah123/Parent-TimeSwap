import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import SignInGoogleBase  from './SignInGoogleBase';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import {Button,Form,Grid,Header,Image,Segment} from 'semantic-ui-react';

const SignIn = () => (
    <div>
        <h1>Sign In</h1>
        <SignInForm />
        
        <SignUpLink />
    </div>
)

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null 
}

class SignInFormBase extends React.Component {
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE}
    }

    
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({...INITIAL_STATE});
            this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
            this.setState({error})
        })
        event.preventDefault();
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }
    render(){
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <div>
            <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                    height: 100%;
                }
            `}
            </style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57775029_10155892215401191_8643864400391831552_n.jpg?_nc_cat=107&_nc_ht=scontent-lax3-1.xx&oh=fbb00cbdc8f01fb0e9758bb1c91a5dd7&oe=5D6CB372' height="20%" width="20%" /> Log-in to your account
                </Header>
                    <Form size='large' onSubmit={this.onSubmit}>
                    <Segment stacked>
                    <Form.Input fluid icon='mail' iconPosition='left'
                        name='email'
                        value={email}
                        onChange={this.onChange}
                        type='text'
                        placeholder='Email Address'
                    />
                    <Form.Input fluid icon='lock' iconPosition='left'
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Enter Password"
                    />
                    {/* <SignInGoogle/> */}
                    <Button color='teal' fluid size='large' disabled={isInvalid} type='submit'>Sign In</Button>
                    {error && <p>{error.message}</p>}
                    </Segment>
                    </Form>
                </Grid.Column>
            </Grid> 
        </div>
        )
    }
}

const SignInForm = compose(
    withRouter, withFirebase
    )(SignInFormBase);

const SignInGoogle = compose(
    withRouter,withFirebase
    )(SignInGoogleBase);

export default SignIn;
export {SignInForm, SignInGoogle};