import React from 'react';
import GetAllButton from './GetAllButton';
import GetByZipCodeSearch from './GetByZipCodeSearch';
import { withAuthorization } from '../Session';

class SearchAvailability extends React.Component {
    render() {
        return (
            <section className='pageBackground'>
                <h1 className='searchPageText'>Connect with Parents Near You!</h1>
                <h3 className='searchPageText'>Search Location & Availability by Browsing User Cards for Information.</h3>
                <h3 className='searchPageText'>Play. Help. Network.</h3>
                <hr/>
                <GetAllButton />
                <hr/>
                <GetByZipCodeSearch />
            </section>
        )
    }
}


const condition = authUser => authUser != null;

export default withAuthorization(condition)(SearchAvailability);
