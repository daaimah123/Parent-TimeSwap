import React from 'react';
import {SearchAvailabilityLink} from '../SearchAvailability/index.js';
import './index.css';
import { Container} from 'semantic-ui-react';
import { withFirebase } from '../Firebase';

class AccountSetUp extends React.Component {

    render() {
        return (
            <div>
                <h1>Account Set Up</h1>
                <AccountSetUpForm />
                <SearchAvailabilityLink />
            </div>
        )
    }
}

const INITIAL_STATE = {
    age_range: '', 
    children_num: '', 
    name: '',
    home_zip: '',
    email: '',
    phone: '',
    message: ''
    };

class AccountSetUpForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };  
        }
    
    onChange = event => {
        /* input name field: input value - onChange handler will take input and change state */
       this.setState({ [event.target.name]: event.target.value });
   }

   onSubmit = event => {
    event.preventDefault();
    console.log(123); //test submit button is working
    //get values 
    //printing inputs to console
    // console.log(event.target.age_range.value) //gets error and fetches 8 times
    console.log(event.target.name.value) 
    // console.log(event.target.home_zip.value) //input ignored
    console.log(event.target.email.value) 
    console.log(event.target.phone.value) 
    // console.log(event.target.message.value) //outputting error
    }

    //TODO: from react docs on forms https://reactjs.org/docs/forms.html
    // handleInputChange = (event) => {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    //   }

    ageRangeNumChildren = () => (
        <Container>
        <label>Age Range</label>
            <select name='age range' placeholder='age group'>
                <option value="null"> </option>
                <option value="none">--</option>
                <option value="infant">infant</option>
                <option value="toddler">toddler</option>
                <option value="youth">youth</option>
                <option value="teenager">teenager</option>
            </select>
        <label>Children</label>
            <select type='number' name='children' placeholder='#'>
                <option value="null"> </option>
                <option value="none">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11+</option>
            </select>
        {/* add more children here feature, so not so many rows */}
        </Container>
    )


    render(){
        const {age_range, children_num, name, home_zip, email, phone, message} = this.state;
        const isInvalid = 
            age_range === '' ||
            children_num ==='' ||
            name === '' || 
            home_zip === '' ||
            email === '' || 
            phone === '' || 
            message === '';
        return (
            /*  ============ ACCOUNT SET UP FORM ==============  */
         <section className='body'>
         <div className='container'>
             <h1 className='brand'><span> Set Up Your Account</span></h1>
             <div className='wrapper'>
                 <div className="info">
                     <h3>Some Words</h3>
                     <ul>
                         <li>test line 1</li>
                         <li>test line 2</li>
                         <li>test line 3</li>
                     </ul>
                 </div>
                 <div className='contact'>
                     <h3>statement</h3>
                     <this.ageRangeNumChildren />
                     <this.ageRangeNumChildren />
                     <this.ageRangeNumChildren />
                     <form onSubmit={this.onSubmit}>
                         <p>
                             <label>Name</label>
                             <input 
                             value={name}
                             type='text' 
                             onChange={this.onChange}
                             name='name' 
                             placeholder='enter name you want displayed' />
                         </p>
                         <p>
                             <label>Home Zip Code</label>
                             <input  
                             type='text' 
                             value={this.home_zip}
                             onChange={this.onChange}
                             name='zip_code' 
                             placeholder=' enter home zipcode'/>
                         </p>
                         <p>
                             <label>Email Address</label>
                             <input 
                             value={email}
                             onChange={this.onChange}
                             type='text' 
                             name='email' 
                             placeholder='test@test.com'/>
                         </p>
                         <p>
                             <label>Phone Number</label>
                             <input 
                             value={phone}
                             onChange={this.onChange}
                             type='tel' 
                             name='phone' 
                             placeholder='5555555555'/>
                         </p>
                         <p className='full'>
                             <label>Message</label>
                             <textarea 
                             value={message}
                             onChange={this.onChange}
                             type='text'
                             name='message' 
                             placeholder='tell other parents about yourself and how you plan to help'></textarea>
                         </p>
                         <p className='full'>
                            <button  type="submit">Submit</button> {/* FIXME:disabled={isInvalid}*/}      
                         </p>                           
                     </form>
                 </div>
             </div>
         </div>
     </section>
        )
    }
   }







export default AccountSetUp;

