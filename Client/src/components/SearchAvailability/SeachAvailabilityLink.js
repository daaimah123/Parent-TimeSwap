import React from 'react';
import {  Grid, Icon, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';



/* ================= Search Availability LINK ================= */
const SearchAvailabilityLink = () => (
    <div>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Message > 
            <Icon name='hand point right' /> Click Here to 
                <Link to={ROUTES.SEARCH_AVAILABILITY}> Search Availability</Link> In Your Prefered Area
            </Message>
            </Grid.Column>
        </Grid>
    </div>
)

export default SearchAvailabilityLink;