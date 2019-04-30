import React from 'react';
import SearchAvailabilityLink from '../SearchAvailability/SeachAvailabilityLink';
import './index.css';
// import { Container} from 'semantic-ui-react';
// import { withFirebase } from '../Firebase';
import CheckboxOrRadioGroup from './form_components/CheckboxOrRadioGroup';
import SingleInput from './form_components/SingleInput';
import SelectInput from './form_components/SelectInput';
import TextArea from './form_components/TextArea';

//TODO: ********* account set up needs to be added to authorization loop *********

//second form with all settings (https://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/)
import './styles.css';  
import PasswordChange from '../PasswordChange';

class AccountSetUp extends React.Component {
    render() {
        return (
            <div>
                <h1>Account Set Up</h1>
                <PasswordChange/>
                <AccountSetUpForm />
                <SearchAvailabilityLink />
                
            </div>
        )
    }
}

/*  ========================================== ACCOUNT SET UP FORM ========================================== */
class AccountSetUpForm extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
            formCompleted: false,
            userName: '',
            emailInput: '',
            phoneNumber: '',
			childGroupSelections: ["infant", "toddler", "youth", "teen"],
			selectedChildGroup: [],
			ageOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			userNumChildrenSelection: '',
			currentZipCode: '',
			description: ''
		};
    }
    
/*  =============== HANDLE FUNCTIONS FOR INPUT FORM AREAS =============== */
    //checkboxes age group
    handleChildGroupSelection = (event) => {
		const newSelection = event.target.value;
		let newSelectionArray;
		if(this.state.selectedChildGroup.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedChildGroup.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedChildGroup, newSelection];
		}
		this.setState({ selectedChildGroup: newSelectionArray }, () => console.log('Child Group Selection: ', this.state.selectedChildGroup));
    }
    //name single input 
    handleFullNameChange = (event) => {
		this.setState({ userName: event.target.value }, () => console.log('User Name: ', this.state.userName));
        event.preventDefault();
    }
    //Select Num Children
    handleNumChildrenSelect = (event) => {
		this.setState({ userNumChildrenSelection: event.target.value }, () => console.log('Number of Children: ', this.state.userNumChildrenSelection));
    }
    //email single input
    handleEmailChange = (event) => {
		this.setState({ emailInput: event.target.value }, () => console.log('Email: ', this.state.emailInput));
        event.preventDefault();
    }
    //home zip code single num input
    handlecurrentZipCodeChange = (event) => {
		this.setState({ currentZipCode: event.target.value }, () => console.log('Home Zip Code: ', this.state.currentZipCode));
    }
    //phone number single number input
    handlePhoneNumberChange = (event) => {
		this.setState({ phoneNumber: event.target.value }, () => console.log('Phone Number: ', this.state.phoneNumber));
        event.preventDefault();
    }
    //description text area
    handleDescriptionChange = (event) => {
		const textArray = event.target.value.split('').filter(x => x !== 'e');
		console.log('string split into array of letters',textArray);
		const filteredText = textArray.join('');
		this.setState({ description: filteredText }, () => console.log('Description: ', this.state.description));
		this.setState({ description: event.target.value }, () => console.log('Description: ', this.state.description));
    }

/*  =============== INPUT RESULTS OF FORM SUBMITTED TOGETHER =============== */
	handleFormSubmit = (event) => {
		event.preventDefault();
		const formPayload = {
            userName: this.state.userName,
            emailInput: this.state.emailInput,
            currentZipCode: this.state.currentZipCode,
            phoneNumber: this.state.phoneNumber,
            userNumChildrenSelection: this.state.userNumChildrenSelection,
			selectedChildGroup: this.state.selectedChildGroup,
			description: this.state.description
		};
		console.log('Send this in a POST request:', formPayload);
        this.handlePostToDatabase(formPayload);
        this.setState({
            formCompleted: true
        });
    }

    /* =================== POST INPUT DATA TO DATABASE ================= */
    handlePostToDatabase = event => {
        console.log("hello from: " + event.userName)
        console.log(
            this.state.userName
            )
        fetch('/user', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                user_name: event.userName, 
                email: event.emailInput, 
                home_zip_code: event.currentZipCode, 
                phone_number:event.phoneNumber, 
                num_children:event.userNumChildrenSelection, 
                child_group:event.selectedChildGroup, 
                description:event.description
            })
           })
           .then(res => res.json())
           .then(
             (result) => {
               this.setState({
                 isLoaded: true,
                 items: result.items
               });
             },
             (error) => {
               this.setState({
                 isLoaded: true,
                 error
               });
             }
           )
        .catch((error) => {
          console.error(error);
        })
        .then(function(body){ 
            console.log(body)
            });
    }

    render(){
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
                     { this.state.formCompleted === false ? 
                     <form onSubmit={this.handleFormSubmit}>
                        <section>
                            <CheckboxOrRadioGroup
                                title={'Which age group do you have at home'}
                                setName={'children'}
                                type={'checkbox'}
                                controlFunc={this.handleChildGroupSelection}
                                options={this.state.childGroupSelections}
                                selectedOptions={this.state.selectedChildGroup} /> 
                         </section>
                         <section>
                            <SelectInput
                                name={'ageRange'}
                                placeholder={'# Children'}
                                controlFunc={this.handleNumChildrenSelect}
                                options={this.state.ageOptions}
                                selectedOption={this.state.userNumChildrenSelection} />
                         </section>
                         <section>
                            <SingleInput
                                inputType={'text'}
                                title={'Name: '}
                                name={'name'}
                                controlFunc={this.handleFullNameChange}
                                content={this.state.userName}
                                placeholder={'June Johnson'} />
                         </section>
                         <section>
                            <SingleInput
                                inputType={'text'}
                                title={'Email: '}
                                name={'email'}
                                controlFunc={this.handleEmailChange}
                                content={this.state.emailInput}
                                placeholder={'test@test.com'} />
                        </section>
                         <section>
                            <SingleInput
                                inputType={'number'}
                                title={'What is your home zip code?'}
                                name={'currentZipCode'}
                                controlFunc={this.handlecurrentZipCodeChange}
                                content={this.state.currentZipCode}
                                placeholder={'5-Digit Zip Code'} />
                         </section>
                         <section>
                            <SingleInput
                                inputType={'number'}
                                title={'Phone Number: '}
                                name={'phoneNumber'}
                                controlFunc={this.handlePhoneNumberChange}
                                content={this.state.phoneNumber}
                                placeholder={'5555555555'} />
                         </section>
                         <section className='full'>
                            <TextArea
                                title={'About Me: '}
                                rows={5}
                                resize={false}
                                content={this.state.description}
                                name={'currentPetInfo'}
                                controlFunc={this.handleDescriptionChange}
                                placeholder={'tell other parents about yourself and how you plan to help'} /> 
                         </section>
                         <section className='full'>
                            <button  type="submit" value="Submit">Submit</button> {/*disabled={isInvalid}  */}
                         </section>                           
                     </form>
                     :
                     <div>
                        <dl>
                            <dt>Name</dt>
                            <dd>{this.state.userName}</dd>
                            <dt>Number of Children</dt>
                            <dd>{this.state.userNumChildrenSelection}</dd>
                            <dt>Child Group</dt>
                            <dd>{this.state.selectedChildGroup}</dd>
                            <dt>Home Zip Code</dt>
                            <dd>{this.state.currentZipCode}</dd>
                            <dt>About Me</dt>
                            <dd>{this.state.description}</dd>
                        </dl>
                     </div>
                    }
                 </div>
             </div>
         </div>
     </section>
        )
    }
}

export default AccountSetUp;

