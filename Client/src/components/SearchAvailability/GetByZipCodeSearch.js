import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'
// import './searchAvailability.css';
// import { FaSearch } from "@fortawesome/react-fontawesome";
import { FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';

class GetByZipCodeSearch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '', 
        error: null, 
        isLoaded: false, 
        items: []
      };
    }
  
    handleChange = (event) => {
        this.setState({value: event.target.value}, () => console.log("zip code: " + this.state.value)); //id number typed into value box
    }

    handleSubmit = (event) => {
        fetch(`/user/${this.state.value}`)
          .then(res => res.json()) //turn response into json
          .then( 
            (result) => { //use results in setState
              console.log(result)
              this.setState({
                isLoaded: !this.state.isLoaded,//true, //the result state is changed to true
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
  
// ================== SEARCH CARDS ===================

userCard = () => {
  const {items} = this.state;
    const mappedCard = items.map(item  => {
      return(
          <div key={item.user_id} className="card m-5 user-card" style={{width: '20rem', display: 'flex', flexDirection: 'row', justifyContent: "center"}}>
              <div className="card-body">
                <h1 className="card-title">{item.user_name}</h1>
                    <h4 className="card-text">{item.description}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Zip Code:</strong> {item.home_zip_code}</li>
            <li className="list-group-item"><strong>Number Children:</strong> {item.num_children}</li>
            <li className="list-group-item"><strong>Children Age Group:</strong> {item.child_group}</li>
            <li className="list-group-item">
                <strong>Monday: </strong>{item.monday}<br/> 
                <strong>Tuesday: </strong>{item.tuesday} <br/> 
                <strong>Wednesday: </strong>{item.wednesday} <br/> 
                <strong>Thursday:</strong> {item.thursday} <br/> 
                <strong>Friday: </strong>{item.friday} <br/>
                <strong> Saturday: </strong>{item.saturday} <br/>
                <strong>Sunday: </strong>{item.sunday} 
            </li>
            <li className="list-group-item">
              <Link to={ROUTES.CHAT} id={item.user_id}><h3>Click to Chat</h3></Link>
            </li>
          </ul>
          </div>
          </div>
      )
    })
    return(
      <div className = "row">
        {mappedCard}
      </div>
    )
  }

    render() {
      const { value, /*items*/ } = this.state; //allows this.state to be assumed
      const { handleSubmit, handleChange } = this; 
      return (
        <div>
          <section className='searchLocation'>
            <form className="form-group" onSubmit={handleSubmit} >
              <label for="userSearchZipCode">
               <h3> Search By Zip Code</h3>
              </label>
               <div className='form-inline'>
                  <input 
                    id="userSearchZipCode"
                    className="form-control mr-sm-2"
                    type="search" 
                    placeholder="i.e. 94545" 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="Search"
                  />
                <button className="btn btn-info" type="submit"><FaSearch/></button>
              </div>
            </form>
          </section>
          <div>
            {this.state.isLoaded ? 
            <div> {this.userCard()}</div>
            : null
            }
          </div>
        </div>
          
       
      );
    }
}

    


  export default GetByZipCodeSearch;