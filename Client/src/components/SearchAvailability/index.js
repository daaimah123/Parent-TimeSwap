import React from 'react';
import GetAllButton from './GetAllButton';
import GetByZipCodeSearch from './GetByZipCodeSearch';

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



export default SearchAvailability;
