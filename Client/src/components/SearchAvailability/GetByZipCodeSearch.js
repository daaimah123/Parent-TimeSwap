import React, { Component } from 'react';
// import GetByZipCodeCards from './GetByZipCodeCards';
// import '../App.css';
import Card from 'react-bootstrap/Card';


class GetByZipCodeSearch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '', 
        error: null, 
        isLoaded: false, 
        items: {},
      };
    }
  
    handleChange = (event) => {
        this.setState({value: event.target.value}, () => console.log("zip code: " + this.state.value)); //id number typed into value box
        // event.preventDefault();
    }

    handleSubmit = (event) => {
        fetch(`/user/${this.state.value}`)
          .then(res => res.json()) //turn response into json
          .then( 
            (result) => { //use results in setState
              console.log(result)
              this.setState({
                isLoaded: true, //the result state is changed to true
                items: result//the result state is changed to the info thats been fetched and turned into json
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error // the error that's received 
              });
            }
          )
        event.preventDefault();
    }
  
    userCard = () =>{
        // const {items} = this.state;
        return (
          <h1>Hello There</h1>
        
        
        )
    }    
    

    render() {
      const { value, /*items*/ } = this.state; //allows this.state to be assumed
      const { handleSubmit, handleChange } = this; 
      return (
        <section>
          <form onSubmit={handleSubmit}>
            <label>
              Submit Zip Code Here
              <input 
              type="text" 
              placeholder="i.e. 94545" 
              value={value} 
              onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          {this.state.isLoaded ? 
    
          <this.userCard/>
      
          : null
          }
        </section>
      );
    }
}

    


  export default GetByZipCodeSearch;