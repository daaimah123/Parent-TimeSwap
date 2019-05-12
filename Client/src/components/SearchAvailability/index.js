import React from 'react';
import GetAllButton from './GetAllButton';
import GetByZipCodeSearch from './GetByZipCodeSearch';
import { withAuthorization } from '../Session';

class SearchAvailability extends React.Component {
    render() {
        return (
            <section className='pageBackground'>
            <div>
                <h1>Search Availability</h1>
            </div>
            <div  >
                    <div>
                        <GetAllButton />
                    </div>
                    <div>
                        <GetByZipCodeSearch />
                    </div>
            </div>
            </section>
        )
    }
}


const condition = authUser => authUser != null;

export default withAuthorization(condition)(SearchAvailability);
