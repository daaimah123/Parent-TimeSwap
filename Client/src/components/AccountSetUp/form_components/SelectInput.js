import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = (props) => (
	<div className="form-group">
		<select
			name={props.name}
			value={props.selectedOption}
			onChange={props.controlFunc}
			className="form-select">
			<option value="">{props.placeholder}</option>
			{props.options.map(opt => {
				return (
					<option
						key={opt}
						value={opt}>{opt}</option>
				);
			})}
		</select>
	</div>
);

/* ============= SELECT INPUT PROPS =============
"React.PropTypes" use for indicating the type of the prop(string, number, array, object, etc.), if it is required (isRequired), etc.*/
SelectInput.propTypes = {
    //name attribute of form
	name: PropTypes.string.isRequired,
    //array of string that will be mapped over in component's render method
    options: PropTypes.array.isRequired,
    //prepopulated data options
	selectedOption: PropTypes.string,
    // attached to onChange and will update parent/container component each time state is changed
    controlFunc: PropTypes.func.isRequired,
    // placeholder text
    placeholder: PropTypes.string
};

export default SelectInput;