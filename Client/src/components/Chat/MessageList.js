import React, { Component } from 'react'

class MessagesList extends Component {
   render() {
       return (
           <ul>
               {this.props.messages.map((message, index) => (
                   <li key={index}>
                        <div>
                            <span>{message.senderId}</span>
                            <p>{message.text}</p>
                        </div>
                   </li>
               ))}
           </ul>
       )
   }
}


export default MessagesList;