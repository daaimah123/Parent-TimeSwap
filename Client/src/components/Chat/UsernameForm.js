import React from 'react';
import './style.css';
import { FaCommentDots } from 'react-icons/fa';
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
            <div className={'holder'}>
                <form onSubmit={this.onSubmit} className={'input-holder'}>
                    <input 
                    // className={"placeholder"}
                        className={'input'}
                        type="text"
                        placeholder="What is your full name?"
                        onChange={this.onChange}
                    />
                    {/* <div >placeholder=""</div> */}
                    {/* <input className={'submitButton'} type="submit"/> */}
                    <button className={'submitButton'}>
                        <FaCommentDots/>
                    </button> 
                </form>
            </div>
        )
    }


}

export default UsernameForm;
