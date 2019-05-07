import React from 'react'

class RoomList extends React.Component {
    render () {
        console.log(this.props.rooms)
        return (
            <div>
                <ul>
                <h3>Your rooms</h3>
                <div>{this.props.rooms.map(room => {
                    return(
                        <li key={room.id}>
                            <a 
                            onClick={() => this.props.subscribeToRoom(room.id)}
                            href='#'>{room.name}</a>
                        </li>
                    )
                })}</div>
                </ul>
            </div>
        )
    }
}

export default RoomList