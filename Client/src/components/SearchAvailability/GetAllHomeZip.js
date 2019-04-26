import React, { Component } from 'react';
// import '../App.css';
import Card from 'react-bootstrap/Card';


//FIXME: ********* currently testing get will work, this is test data from final assessment to make sure things render to page, not data for this project *********

class GetAllHomeZip extends Component {
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

    // getAllUsers = () => { 
    //   const {items} = this.state;
    //   return
    //   (
    //     )
    // }

    
  
    render() {
      const { error, isLoaded, items } = this.state; //allows this.state to be assumed
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <section>
            <div>
              <button onClick={this.getAllUsers}>Get All Users</button>
            </div>
            <div className="card-group">
      {items.map(item => (
        <div key={item.user_id} className="row"> 
          <Card border="dark" style={{ width: '18rem', color: 'teal'}}>
              <Card.Header>User Name: {item.user_name} </Card.Header>
              <Card.Body>
                <Card.Title>User Zip Code: {item.home_zip_code}</Card.Title>{/* TODO: Would like to hide later */}
                <Card.Subtitle className="mb-2 text-muted">Number Children: {item.num_children} <br/> Children Age Group: {item.child_group}</Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                <Card.Link href="#">User Profile</Card.Link>
                <Card.Link href="#">Send Request</Card.Link>{/* TODO:  Should send request to phone number */}
              </Card.Body>
            </Card>
          </div>
            ))}
            </div>  
          </section>
        );
      }
    }
  }


export default GetAllHomeZip;