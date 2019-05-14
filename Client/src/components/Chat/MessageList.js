import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class MessagesList extends Component {

  //prevents jump down if further up screen, jumps down if close to bottom
  componentWillUpdate(){
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight 
  }

  //scroll window to bottom when new text added
  componentDidUpdate(){
    if (this.shouldScrollToBottom){
      const node = ReactDOM.findDOMNode(this)
      node.scrollTop = node.scrollHeight 
    }
  }

   render() {
       const styles = {
       container: {
         overflowY: 'scroll',
         flex: 1,
       },
       ul: {
         listStyle: 'none',
       },
       li: {
         marginTop: 13,
         marginBottom: 13,
       },
       senderUsername: {
         fontWeight: 'bold',
       },
       message: { 
         fontSize: 15,
         background: '#17a2b8',
        color: 'black',
        display: 'inline',
        padding: '4px 8px',
        borderRadius: '8px',
      },
     }

     if (!this.props.roomId){
       return (
         <div>
          <h3>
          <br/><br/><br/><br/><br/><br/>
          &larr; Start a Private Chat with Another Member! 
          <br/><br/><br/> &larr; See "Your Rooms" to Join A Chat!
          <br/><br/><br/> &larr;  Create a New Public Room for Others to Join!
           </h3>
         </div>
       )
     }

       return (
           <div style={{...this.props.style, ...styles.container}}>
           <ul style={styles.ul}>
               {this.props.messages.map((message, index) => (
                   <li key={index} style={styles.li}>
                      <div>
                          <span style={styles.senderUsername}>{message.senderId}</span>{' '}
                      </div>
                      <p style={styles.message}>{message.text}</p>
                   </li>
               ))}
           </ul>
           </div>
       )
   }
}

export default MessagesList;
