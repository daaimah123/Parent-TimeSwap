import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessagesList from './MessageList';
import SendMessageForm from './SendMessageForm';
import TypingIndicator from './TypingIndicator';
import WhosOnlineList from './WhosOnlineList';
import RoomList from './RoomList';
import {instanceLocator} from './config';
import NewRoomForm from './NewRoomForm';

class ChatScreen extends React.Component {
    constructor(){
      super()
      this.state = {
          currentUser: {},
          currentRoom: {},
          messages: [], 
          text: '', 
          usersWhoAreTyping: [], 
          joinableRooms: [],
          joinedRooms: [],
          roomId: null,
      }
    }
  
    componentDidMount(){
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({ url:'http://localhost:3003/authenticate' })
        })
    
    chatManager.connect()
    .then(currentUser => {
        this.setState({ currentUser })
        console.log('Successful! Current user: ', currentUser)

        return currentUser.subscribeToRoom({
            roomId: "19407429", 
            // messageLimit: 100, 
            hooks: {
                // onMessage: message => {console.log("received message", message)},
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }, 
                onAddedToRoom: room => {
                    console.log(`Added to room ${room.name}`)
                },
                onUserStartedTyping: user => {
                    this.setState({
                        usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name]
                    })
                }, 
                onUserStoppedTyping: user => {
                    this.setState({
                        usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                            username => username !== user.name
                        )
                    })
                },
                onUserCameOnline: () => this.forceUpdate(), 
                onUserWentOffline: () => this.forceUpdate(), 
                onUserJoined: () => this.forceUpdate()
            },
        })
    })
    .then(currentRoom => {
        this.setState({currentRoom})
        console.log('current room', currentRoom)
    })
    .catch(error => console.error('Error: ', error))


    //get other rooms that are already created
    chatManager.connect()
    .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms()
        this.createRoom()
        // this.subscribeToRoom()
    })
    .catch(err => console.log('Error on connecting: ', err))    
    }

    //create a room
    createRoom = (name) => {
        this.currentUser.createRoom({
            name,
        })
        .then(room => this.subscribeToRoom(room.id))
        .catch(err => console.log('Error with createRoom: ', err))    
    }
  
    //get joinable rooms
    getRooms = () => {
        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
                joinableRooms, 
                joinedRooms: this.currentUser.rooms
            })
        })
        .catch(err => console.log('Error on joinableRooms: ', err))    
    }

    //subscribe a user to a room
    subscribeToRoom = (roomId) => {
        this.setState({messages: []})
        this.currentUser.subscribeToRoom({
            roomId: roomId, 
            hooks: {
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
        .then(room => {
            this.setState({
                roomId: room.id
            })
            this.getRooms()
        })
        .catch(err => console.log('error on subscribing to room:', err))
    }
    
    //send a message
    sendMessage = (text) => {
        this.state.currentUser.sendMessage({
        text,
        roomId: this.state.roomId,
        })
    }

    //user typing status
    sendTypingEvent = () => {
        this.state.currentUser
        .isTypingIn({roomId: this.state.currentRoom.id})
        .catch(error => console.log('error', error))
    }

    render() {
        const styles = {
          container: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
          },
          chatContainer: {
            display: 'flex',
            flex: 1,
          },
          whosOnlineListContainer: {
            width: '300px',
            flex: 'none',
            padding: 20,
            backgroundColor: 'turquoise',
            color: 'black',
          },
          chatListContainer: {
            padding: 20,
            width: '85%',
            display: 'flex',
            flexDirection: 'column',
          },
       }
      return (
        <div>
            <h1>Chat Screen</h1>
            <h3>Hello, {this.props.currentUsername}</h3>
            <div style={styles.container}>
                <div style={styles.chatContainer}>
                    <aside style={styles.whosOnlineListContainer}>
                        <h2>Who's Online?</h2>
                        <WhosOnlineList users={this.state.currentRoom.users} currentUser={this.state.currentUser}/>
                        <RoomList 
                        roomId={this.state.roomId}
                        subscribeToRoom={this.subscribeToRoom}
                        rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
                        <NewRoomForm createRoom={this.createRoom}/>
                    </aside>
                    <section style={styles.chatListContainer}>
                        <MessagesList 
                        roomId={this.state.roomId}
                        messages={this.state.messages} 
                        style={styles.chatList}/>
                        <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping}/>
                        <SendMessageForm 
                        disabled={!this.state.roomId}
                        onSubmit={this.sendMessage} 
                        onChange={this.sendTypingEvent}/>
                    </section>
                </div>
            </div>
        </div>
      )
    }
  }

export default ChatScreen;
