import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'
import './style.css';
// import { FaSearch } from "@fortawesome/react-fontawesome";
import { FaSearch } from 'react-icons/fa';

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
  
// ================== SEARCH CARDS ===================

    userCard = () =>{
      const {items} = this.state;
        return (  
          <div className="card-group">
           {items.map(item => (
            <div key={item.user_id} className="row">
                      <Card className="text-center">
                        <Card.Header>User Name: {item.user_name}
                          <Link to={ROUTES.CHAT} id={item.user_id}><h3>Click to Chat</h3></Link>
                        </Card.Header>
                        <Card.Body>
                          <Card.Title>User Zip Code: {item.home_zip_code}</Card.Title>
                          <Card.Text>
                          {item.description} <br/> 
                          Number Children: {item.num_children}   |   Children Age Group: {item.child_group}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                          <strong>Monday: </strong>{item.monday}<br/> 
                          <strong>Tuesday: </strong>{item.tuesday} <br/> 
                          <strong>Wednesday: </strong>{item.wednesday} <br/> 
                          <strong>Thursday:</strong> {item.thursday} <br/> 
                          <strong>Friday: </strong>{item.friday} <br/>
                          <strong> Saturday: </strong>{item.saturday} <br/>
                          <strong>Sunday: </strong>{item.sunday} 
                        </Card.Footer>
                      </Card>;
                    </div>
                ))}
          </div>
        )
    }    

    render() {
      const { value, /*items*/ } = this.state; //allows this.state to be assumed
      const { handleSubmit, handleChange } = this; 
      return (
        <div>
          <section>
            <form className={'searchForm'} onSubmit={handleSubmit}>
              <label>
                Submit Zip Code Here
              </label>
                <input className={'searchInput'}
                type="text" 
                placeholder="i.e. 94545" 
                value={value} 
                onChange={handleChange} />
              
              <button className={'submitButton'}>
                <FaSearch/>
              </button> 
                {/* type="submit" value="Submit" /> */}
              
            </form>
          </section>
          <div>
            {this.state.isLoaded ? 
            <div >
              <this.userCard/>
            </div>
            : null
            }
          </div>
        </div>
          
       
      );
    }
}

    


  export default GetByZipCodeSearch;