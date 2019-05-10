import React, { Component } from 'react';
// import '../App.css';
import Card from 'react-bootstrap/Card';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'


class GetAllUserCards extends Component {
    constructor(props) { //set up telling component what we need to start
        super(props);
        this.state = { //beginning state
          error: null, 
          isLoaded: false, 
          items: [] //info is stored here
        };
      }
    
      componentWillMount() { //system in react, auto generates the function inside to go first; will not work when you need to manipulate info or provide info; auto-gets
        fetch("/user")
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
      }

      renderTrails = () => {
        
          const trail= this.state.items.map(item  => {
            return(
                <div className="card" style={{width: 30 + 'rem' }}>
                  <img className="card-img-top" src={item.id ? ( item.name) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} />
                    <div className="card-body">
                      <h1 className="card-title">Name</h1>
                        <h2 className="card-text">Location </h2>
                          <h4 className="card-text">Summary </h4>
      <ul className="list-group list-group-flush">
                  <li className="list-group-item">Difficulty: </li>
                  <li className="list-group-item">Length:  miles</li>
                  <li className="list-group-item">Ascent:  ft, Descent:  ft</li>
                  <li className="list-group-item">Conditions: </li>
                  <li className="list-group-item">High: </li>
                  <li className="list-group-item">Stars: </li>
                  <li className="list-group-item"><a href='#' rel="noopener noreferrer" className="card-link">Trail Information</a></li>
                  </ul>
                  </div>
              </div>
            )
          })
          return(
            <div className = "row">
              {trail}
            </div>
          )
        }
      

    render(){
        const { error, isLoaded, items} = this.state; //allows this.state to be assumed
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
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
                <div>{this.renderTrails()}</div>
            </div> 
            )
        }
    }
}

export default GetAllUserCards;


