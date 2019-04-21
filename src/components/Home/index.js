import React from 'react';
import {SearchAvailabilityLink} from '../SearchAvailability/index.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <SearchAvailabilityLink />
            </div>
        )
    }
}

export default Home;