import React, { Component } from 'react';
// import '../App.css';
// import Card from 'react-bootstrap/Card';
// import CardComponent from './UserCards';
import GetAllUserCards from './GetAllUserCards';

//FIXME: ********* currently testing get will work, this is test data from final assessment to make sure things render to page, not data for this project *********

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
        <section>
          <div>
            <button onClick={this.handleClick}>
            Get All Users
            {/* this will toggle, wont populate input given */}
            </button>
            {this.state.allEvents ? <GetAllUserCards /> : null} 
          </div>
        </section>
      );
  }
}

export default GetAllButton;