import React, {Component} from 'react';
import CheckboxOrRadioGroup from './form_components/CheckboxOrRadioGroup';
import SingleInput from './form_components/SingleInput';
// import TextArea from '../components/TextArea';
import SelectInput from './form_components/SelectInput';

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
            userName: '',
            phoneNumber: '',
			childGroupSelections: ["infant", "toddler", "youth", "teen"],
			selectedChildGroup: [],
			ageOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			userChildAgeSelection: '',
			siblingOptions: [],
			siblingSelection: [],
			currentZipCode: '',
			description: ''
		};
		// this.handleFormSubmit = this.handleFormSubmit.bind(this);
		// this.handleClearForm = this.handleClearForm.bind(this);
		// this.handleChildGroupSelection = this.handleChildGroupSelection.bind(this);
		// this.handleSiblingsSelection = this.handleSiblingsSelection.bind(this);
		// this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}
	componentDidMount() {
		// fetch('./fake_db.json')
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		this.setState({
		// 			userName: data.userName,
		// 			childGroupSelections: data.childGroupSelections,
		// 			selectedChildGroup: data.selectedChildGroup,
		// 			ageOptions: data.ageOptions,
		// 			userChildAgeSelection: data.userChildAgeSelection,
		// 			siblingOptions: data.siblingOptions,
		// 			siblingSelection: data.siblingSelection,
		// 			currentZipCode: data.currentZipCode,
		// 			description: data.description
		// 		});
		// 	});
	}
	handleFullNameChange = (event) => {
        
		this.setState({ userName: event.target.value }, () => console.log('User Name: ', this.state.userName));
        event.preventDefault();
    }
    handlePhoneNumberChange = (event) => {
		this.setState({ phoneNumber: event.target.value }, () => console.log('Phone Number: ', this.state.phoneNumber));
        event.preventDefault();
    }
	handlecurrentZipCodeChange = (event) => {
		this.setState({ currentZipCode: event.target.value }, () => console.log('Home Zip Code: ', this.state.currentZipCode));
	}
	handleChildAgeSelect = (event) => {
		this.setState({ userChildAgeSelection: event.target.value }, () => console.log('Number of Children: ', this.state.userChildAgeSelection));
	}
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
	// handleSiblingsSelection(e) {
	// 	this.setState({ siblingSelection: [e.target.value] }, () => console.log('siblingz', this.state.siblingSelection));
	// }
	// handleDescriptionChange(e) {
	// 	// const textArray = e.target.value.split('').filter(x => x !== 'e');
	// 	// console.log('string split into array of letters',textArray);
	// 	// const filteredText = textArray.join('');
	// 	// this.setState({ description: filteredText }, () => console.log('description', this.state.description));
	// 	this.setState({ description: e.target.value }, () => console.log('description', this.state.description));
    // }
    //tell form which inputs to clear after form submit
	handleClearForm = (event) => {
		event.preventDefault();
		this.setState({
            userName: '',
            phoneNumber: '',
			selectedChildGroup: [],
			userChildAgeSelection: '',
			siblingSelection: [],
			currentZipCode: 0,
			description: ''
		});
	}
	handleFormSubmit = (event) => {
		event.preventDefault();

		const formPayload = {
            userName: this.state.userName,
            phoneNumber: this.state.phoneNumber,
			selectedChildGroup: this.state.selectedChildGroup,
			userChildAgeSelection: this.state.userChildAgeSelection,
			siblingSelection: this.state.siblingSelection,
			currentZipCode: this.state.currentZipCode,
			description: this.state.description
		};

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(event);
	}
	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
				<h5>Pet Adoption Form</h5>
				<SingleInput
					inputType={'text'}
					title={'Name: '}
					name={'name'}
					controlFunc={this.handleFullNameChange}
					content={this.state.userName}
					placeholder={'first & last name'} />
                <SingleInput
					inputType={'number'}
					title={'Phone Number: '}
					name={'phoneNumber'}
					controlFunc={this.handlePhoneNumberChange}
					content={this.state.phoneNumber}
					placeholder={'5555555555'} />
				 <SelectInput
					name={'ageRange'}
					placeholder={'# Children'}
					controlFunc={this.handleChildAgeSelect}
					options={this.state.ageOptions}
					selectedOption={this.state.userChildAgeSelection} />
                <CheckboxOrRadioGroup
					title={'Which age group do you have at home'}
					setName={'children'}
					type={'checkbox'}
					controlFunc={this.handleChildGroupSelection}
					options={this.state.childGroupSelections}
					selectedOptions={this.state.selectedChildGroup} /> 
				{/* <CheckboxOrRadioGroup
					title={'Are you willing to adopt more than one pet if we have siblings for adoption?'}
					setName={'siblings'}
					controlFunc={this.handleSiblingsSelection}
					type={'radio'}
					options={this.state.siblingOptions}
					selectedOptions={this.state.siblingSelection} /> */}
				<SingleInput
					inputType={'number'}
					title={'What is your home zip code?'}
					name={'currentZipCode'}
					controlFunc={this.handlecurrentZipCodeChange}
					content={this.state.currentZipCode}
					placeholder={'5-Digit Zip Code'} />
			{/* <TextArea
					title={'If you currently own pets, please write their names, breeds, and an outline of their personalities.'}
					rows={5}
					resize={false}
					content={this.state.description}
					name={'currentPetInfo'}
					controlFunc={this.handleDescriptionChange}
					placeholder={'Please be thorough in your descriptions'} /> */}
				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
			</form>
		);
	}
}

export default FormContainer;