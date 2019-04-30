import React, { Component } from 'react';
// import { withAuthorization } from '../Session';

import { withFirebase } from '../Firebase';
// import * as ROLES from '../../constants/routes';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }
  
  render() {

    return (
      <div>
        <h1>Admin</h1>
      </div>
    );
  }
}

export default withFirebase(Admin);