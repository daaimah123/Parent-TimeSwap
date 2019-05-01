import React from 'react';
// import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import './style.css';


class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list">                 
        {this.props.messages.map(message => {
          return (
           <li key={message.id}> 
             <div>Username: 
               {message.senderId}
             </div>
             <div> Message: 
               {message.text}
             </div>
           </li>
         )
       })}
     </ul>
    )
  }
}


export default  MessageList;
