import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

//TODO: only authenticated users should have access
class RequestContact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',  
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
    }

   async handleSubmit(event) {
      event.preventDefault();
      const { name, email, message } = this.state;

      const form = await axios.post('./api/form', {
        name, email, message
      })

    }


    render() {
      return (
          <div>
              <h1>Request Contact</h1> 
              <Form onSubmit={this.handleSubmit} style={{ width: '600px' }}>
                <FormGroup>
                  <Label for='name'>Name: </Label>
                  <Input
                    type='text'
                    name='name'
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='email'>Email: </Label>
                  <Input
                    type='email'
                    name='email'
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='message'>Message: </Label>
                  <Input
                    type='text'
                    name='message'
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
         </div>
            
      );
    }
  }
  
  export default RequestContact;
