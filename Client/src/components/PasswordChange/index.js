import React, { Component } from 'react';
import {Button,Form,Grid,Header,Segment} from 'semantic-ui-react';
import { withFirebase } from '../Firebase';

//FIXME: ********* not in public authorization should be accessible to nonauthenticated parties ********


const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

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
              Change Your Password
            </Header>
                <Form size='large' onSubmit={this.onSubmit}>
                <Segment stacked>
                    <Form.Input fluid icon='lock' iconPosition='left'
                          name="passwordOne"
                          value={passwordOne}
                          onChange={this.onChange}
                          type="password"
                          placeholder="New Password"
                        />
                    <Form.Input fluid icon='lock' iconPosition='left'
                      name="passwordTwo"
                      value={passwordTwo}
                      onChange={this.onChange}
                      type="password"
                      placeholder="Confirm New Password"
                    />
                    <Button color='teal' fluid size='large' disabled={isInvalid} type="submit">
                      I'd like to change my password
                    </Button>
                      {error && <p>{error.message}</p>}
                    </Segment>
                    </Form>
                </Grid.Column>
            </Grid> 
        </div>
    );
  }
}

export default withFirebase(PasswordChangeForm);