import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose';

//router props accessible to component props
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import { Button, Form, Grid, Header,Icon, Image, Message, Segment } from 'semantic-ui-react';



const SignUp = () =>(
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
    </div>
)

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

//sign up form under hood with firebase
class SignUpFormBase extends React.Component {
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE}
    }

    onSubmit = event => {
        //both passwords will be the same, so only one is needed
        const {username, email, passwordOne } = this.state;
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
                    {/* FIXME: image not showing */}
                    <Image src='/ParentTimeSwapLogo.png' size='small' /> Log-in to your account
                </Header>
                    <Form size='large' onSubmit={this.onSubmit}>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left'
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="First & Last Name"
                        />
                        <Form.Input fluid icon='mail' iconPosition='left'
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Email Address"
                        />
                        <Form.Input fluid icon='lock' iconPosition='left'
                            name="passwordOne"
                            value={passwordOne}
                            onChange={this.onChange}
                            type='password'
                            placeholder='Enter Password'
                        />
                        <Form.Input fluid icon='lock' iconPosition='left'
                            name="passwordTwo"
                            value={passwordTwo}
                            onChange={this.onChange}
                            type="password"
                            placeholder='Confirm Password'
                        />
                        <Button color='teal' fluid size='large' disabled={isInvalid} type='submit'>Sign Up</Button>
                        {error && <p>{error.message}</p>}
                    </Segment>
                </Form>
                </Grid.Column>
            </Grid> 
        </div>
        )
    }
}

/* ================= SIGN UP LINK ================= */
const SignUpLink = () => (
    <div>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Message > 
            <Icon name='hand point right' /> Pssst!
                <Link to={ROUTES.SIGN_UP}> Sign Up</Link> Here
            </Message>
            </Grid.Column>
        </Grid>
    </div>
)
//constructed sign up form
//history object within router props accessed in withRouter() allows redirection of user to another page
const SignUpForm = compose(
    withRouter, withFirebase
    )(SignUpFormBase)

export default SignUp;
export { SignUpForm,SignUpLink };
