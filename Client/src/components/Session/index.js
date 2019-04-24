import React from 'react';
//authenticated user entry point to module
import AuthUserContext from './context';
import withAuthentication from './withAuthentication';
import withAuthorization from './withAuthorization';

class Session extends React.Component {
    render() {
        return (
            <div>
                <h1>Session</h1>
            </div>
        )
    }
}

export default Session;
export { AuthUserContext, withAuthentication, withAuthorization }; 