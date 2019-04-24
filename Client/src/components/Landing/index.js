import React from 'react';
import {  Grid, Icon, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';


class Landing extends React.Component {
    render() {
        return (
            <div>
                <h1>Landing</h1>
            </div>
        )
    }
}

/* ================= Landing LINK ================= */
const LandingLink = () => (
    <div>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Message > 
            <Icon name='hand point right' />Navigate Back to the 
                <Link to={ROUTES.LANDING}> Landing </Link> Page
            </Message>
            </Grid.Column>
        </Grid>
    </div>
)

export default Landing;
export { LandingLink };