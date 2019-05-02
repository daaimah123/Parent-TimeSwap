import React from 'react';

class SendMessageForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('this.state.text',this.state.text)
        this.props.onSubmit(this.state.text)
        this.setState({ text: '' })
    }

    onChange = (event) => {
        this.setState({text: event.target.value})
        if (this.props.onChange) {
        this.props.onChange()
      }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="What is your text"
                        onChange={this.onChange}
                        value={this.state.text}
                    />
                    <input type="submit"/>
                </form>
            </div>
        )
    }


}

export default SendMessageForm;
