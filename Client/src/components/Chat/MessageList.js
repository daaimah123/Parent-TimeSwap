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
         background: 'gold',
        color: 'black',
        display: 'inline',
        padding: '4px 8px',
        borderRadius: '8px',
      },
     }

     if (!this.props.roomId){
       return (
         <div>
          <div>
            &larr; Join A Room!
           </div>
         </div>
       )
     }

       return (
           <div
              style={{
               ...this.props.style,
               ...styles.container,
             }}
           >
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