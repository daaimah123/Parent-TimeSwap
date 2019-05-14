import React from 'react';

class WhosOnlineList extends React.Component {

    renderUsers = () => {

        return (
            <ul>
                {this.props.users.map((user, index) => {
          
                  if (user.id === this.props.currentUser.id) {
                    return (
                      <WhosOnlineListItem 
                      key={index} 
                      presenceState="online"
                      handleUserChat={this.props.handleUserChat}
                      userId={user.name}>
                        {user.name} (You)
                      </WhosOnlineListItem>
                    )
                  }
                  return (
                    <WhosOnlineListItem 
                    handleUserChat={this.props.handleUserChat} 
                    key={index} 
                    presenceState={user.presence.state}
                    userId={user.id}
                    >
                      {user.name} ({user.presence.state === "online" ? "online" : "offline"})
                    </WhosOnlineListItem>
                  )
                })}
            </ul>
        )
    }
      render() {
        if (this.props.users) {
          return this.renderUsers()
        } else {
          return <p>Loading...</p>
        }
      }
    }


class WhosOnlineListItem extends React.Component {
  render() {
    const styles = {
      li: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 2,
        paddingBottom: 2,
      },
      div: {
        borderRadius: '50%',
        width: 11,
        height: 11,
        marginRight: 10,
      },
    }
    return (
      <li style={styles.li}>
      <button onClick={() => this.props.handleUserChat(this.props.userId)} >Start Chat</button>
        <div style={{...styles.div, 
          backgroundColor: this.props.presenceState === 'online' ? 'green' : 'grey',
          }}
        />
        {this.props.children}
      </li>
    )
  }
}

export default WhosOnlineList;
