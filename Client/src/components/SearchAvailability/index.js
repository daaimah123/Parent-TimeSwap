import React from 'react';
import GetAllButton from './GetAllButton';
import GetByZipCodeSearch from './GetByZipCodeSearch';
import { withAuthorization } from '../Session';


class SearchAvailability extends React.Component {
    render() {
        return (
            <section>
            <div>
                <h1>Search Availability</h1>
            </div>
            <GetAllButton />
            <GetByZipCodeSearch />
            </section>
        )
    }
}


const condition = authUser => authUser != null;

export default withAuthorization(condition)(SearchAvailability);
