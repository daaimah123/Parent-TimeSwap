import React, { Component } from 'react';
import './searchAvailibility.css';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'

class GetAllUserCards extends Component {
    constructor(props) { 
        super(props);
        this.state = { 
          error: null, 
          isLoaded: false, 
          items: [] 
        };
      }
    
      componentWillMount() { 
        fetch("/user")
          .then(res => res.json()) 
          .then( 
            (result) => { 
              console.log(result)
              this.setState({
                isLoaded: true, 
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error 
              });
            }
          )
      }

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
            <div className = "row"  id="user-card">
              {mappedCard}
            </div>
          )
        }

    render(){
        const { error, isLoaded} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
        return (
                <div>{this.userCard()}</div>
            )
        }
    }
}

export default GetAllUserCards;
