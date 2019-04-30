import React from 'react';
import {Button,Form,Grid,Header, Segment} from 'semantic-ui-react';



const INITIAL_STATE={
    email: '',
    error: null
}

class PasswordForgetFormBase extends React.Component{
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
    }
    //TODO: get this message printed after email is sent
    emailSent = () => {return "<div>Thank you, an email has been sent to you</div>"}

    onSubmit = event => {
        const { email } = this.state;
        this.props.firebase
        .doPasswordReset(email)
        .then(()=>
            this.setState({...INITIAL_STATE})
        )
        .then(
            alert("Successful!")
            // TODO:if successfully sent, print message and default, if not do nothing
        ) //FIXME: not sure how to get this message printed out once sent, thinking a conditional added to repsective button area
        event.preventDefault();
    }

    onChange = event => {
        this.setState({[event.target.name] : event.target.value})
    }

    
    render(){
        const { email, error } = this.state;
        const isInvalid = email === '';

        return(
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
                    Forget Your Password?
                    </Header>
                    <Form size='large' onSubmit={this.onSubmit}>
                        <Segment stacked>
                        <Form.Input fluid icon='mail' iconPosition='left' onSubmit={this.onSubmit}
                            name = "email"
                            value={email}
                            onChange={this.onChange}
                            type='text'
                            placeholder="Email Address"
                            />
                        <Button color='teal' fluid size='large'  disabled={isInvalid} type="submit">Yikes, I forgot my password! <br/>Send me an email with instructions.</Button>
                        {error && <p>{error.message}</p>}
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid> 
        </div>
        )
    }
}


export default PasswordForgetFormBase;