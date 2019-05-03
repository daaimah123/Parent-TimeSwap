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
        const styles = {
           container: {
             padding: 20,
             borderTop: '1px #4C758F solid',
             marginBottom: 20,
           },
           form: {
             display: 'flex',
           },
           input: {
             color: 'inherit',
             background: 'none',
             outline: 'none',
             border: 'none',
             flex: 1,
             fontSize: 16,
           },
         }
        return (
            <div style={styles.container}>
                <div>
                <form onSubmit={this.onSubmit} style={styles.form}>
                    <input
                        type="text"
                        placeholder="What is your text"
                        onChange={this.onChange}
                        value={this.state.text}
                        style={styles.input}
                    />
                    <input type="submit"/>
                </form>
                </div>
            </div>
        )
    }


}

export default SendMessageForm;
