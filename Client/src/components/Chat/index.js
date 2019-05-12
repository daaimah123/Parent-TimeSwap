import React from 'react';
import { withAuthorization } from '../Session';
import './chat.css';
import UsernameForm from './UsernameForm';
import ChatScreen from './ChatScreen';


class Chat extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentScreen: 'WhatIsYourUserNameScreen',
      currentUsername: ''
    }
  }
  
  handleUsernameSubmitted = (username) => {
    fetch('http://localhost:3003/users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({username})
    })
    .then(response => {
      this.setState({
        currentUsername: username, 
        currentScreen: 'ChatScreen'
      })
    })
    .catch(error => {console.log(error)})
  }


  render() {
    if (this.state.currentScreen === 'WhatIsYourUserNameScreen'){
      return <UsernameForm onSubmit={this.handleUsernameSubmitted}/>
    } else if (this.state.currentScreen === 'ChatScreen'){
      return (<ChatScreen currentUsername={this.state.currentUsername}/>)
    }
  }
}

const condition = authUser => authUser != null;

export default withAuthorization(condition)(Chat);
