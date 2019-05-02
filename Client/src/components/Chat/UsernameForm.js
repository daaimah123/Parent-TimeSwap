import React from 'react';

class UsernameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.username)
    }

    onChange = (event) => {
        this.setState({username: event.target.value})
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="What is your full name?"
                        onChange={this.onChange}
                    />
                    <input type="submit"/>
                </form>
            </div>
        )
    }


}

export default UsernameForm;
