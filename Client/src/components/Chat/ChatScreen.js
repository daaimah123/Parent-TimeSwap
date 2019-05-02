import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessagesList from './MessageList';
import SendMessageForm from './SendMessageForm';

class ChatScreen extends React.Component {
    constructor(){
      super()
      this.state = {
          currentUser: {},
          currentRoom: {},
          messages: [], 
          text: ''
      }
    }
  
    componentDidMount(){
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:de6dff03-0811-41fc-b06a-878538c7b5dd',
            userId: this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({ url:'http://localhost:3003/authenticate' })
          })
    
    chatManager.connect()
    .then(currentUser => {
        this.setState({ currentUser })
        console.log('Successful! Current user: ', currentUser)
        return currentUser.subscribeToRoom({
            roomId: "19401683", 
            messageLimit: 100, 
            hooks: {
                // onMessage: message => {console.log("received message", message)},
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }, 
                onAddedToRoom: room => {
                    console.log(`Added to room ${room.name}`)
                }

            }
        })
    })
    .then(currentRoom => {
        this.setState({currentRoom})
        console.log('current room', currentRoom)
    })
    .catch(error => console.error('Error: ', error))
    }
  
    sendMessage = (text) => {
        this.state.currentUser.sendMessage({
        text,
        roomId: this.state.currentRoom.id,
        })
    }


    render() {
      return (
        <div>
          <h1>Chat Screen</h1>
          <h3>Hello, {this.pro}</h3>
          <MessagesList messages={this.state.messages}/>
          <SendMessageForm onSubmit={this.sendMessage}/>
        </div>
      )
    }
  }

export default ChatScreen;
