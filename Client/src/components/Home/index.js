import React from 'react';
import SearchAvailabilityLink from '../SearchAvailability/SeachAvailabilityLink';
import { withAuthorization } from '../Session';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <SearchAvailabilityLink />
  </div>
);

const condition = authUser => authUser != null;

export default  withAuthorization(condition)(Home);
