import React, { Component } from 'react';
import './style.css';
import GetAllUserCards from './GetAllUserCards';

class GetAllButton extends Component {

  constructor(props){
    super(props)
    this.state = {
      allEvents: false
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      allEvents: !this.state.allEvents
    })
    console.log('Clicked button')
  }

  render() {
      return (
        <section className={'userNameForm'}>
          <div className={'buttonLocation'}>
            <button className={'getAllButton'} onClick={this.handleClick}>
            Get All Users
            {/* this will toggle, wont populate input given */}
            </button>
            </div>
            <div>
              {this.state.allEvents ? <GetAllUserCards /> : null} 
          </div>
        </section>
      );
  }
}

export default GetAllButton;
