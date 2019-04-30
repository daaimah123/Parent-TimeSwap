import React from 'react';
import PropTypes from 'prop-types';

/* ======= PURE FUNCTIONAL COMPONENT ======= */
const SingleInput = (props) => (
	<div className="form-group">
		<label className="form-label">{props.title}</label>
		<input
			className="form-input"
			name={props.name}
			type={props.inputType}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} 
			/>
	</div>
);


/* ============= SINGLE INPUT PROPS =============
"React.PropTypes" use for indicating the type of the prop(string, number, array, object, etc.), if it is required (isRequired), etc.*/
SingleInput.propTypes = {
//determines input type as text or number
	inputType: PropTypes.oneOf(['text', 'number']).isRequired,
// string rendered to input label
	title: PropTypes.string.isRequired,
// name attribute for input
	name: PropTypes.string.isRequired,
// attached to onChange and will update parent/container component each time state is changed
	controlFunc: PropTypes.func.isRequired,
// input content
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
// placeholder text
	placeholder: PropTypes.string,
};

export default SingleInput;