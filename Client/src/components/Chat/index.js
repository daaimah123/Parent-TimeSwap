import React from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import Title from './Title';
import SendMessageForm from './SendMessageForm';
import MessageList from './MessageList';
import './style.css';

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "Daaimah!"
  }
]

const instanceLocator = "v1:us1:de6dff03-0811-41fc-b06a-878538c7b5dd"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/de6dff03-0811-41fc-b06a-878538c7b5dd/token"
const username = "User_1"
const roomId =  19400728


class Chat extends React.Component {
  
  constructor() {
    super()
    this.state = {
       messages: DUMMY_DATA
    }
  }
  
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: username,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
   }) 

  chatManager.connect().then(currentUser => {
    currentUser.subscribeToRoom({
    roomId: roomId,
    hooks: {
      onNewMessage: message => {
        this.setState({
          messages: [...this.state.messages, message]
        })
      }
    }
    })
  })
  }

  render() {
    return (
      <div className="app">
        <h1>Chat</h1>
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
    </div>
    )
  }
}

export default Chat;
