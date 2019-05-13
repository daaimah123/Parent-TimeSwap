import React, { Component } from 'react';
// import './searchAvailibility.css';
import GetAllUserCards from './GetAllUserCards';
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';

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
        <section className='userNameForm'>
          <div className='buttonLocation' >
              <p>
                <h3> Retrieve All Users</h3>
              </p>
            <button 
              className="btn btn-info" 
              type="submit" 
              onClick={this.handleClick}
            >
            View Everyone!
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
