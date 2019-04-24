import React from 'react';
import PropTypes from 'prop-types';

const CheckboxOrRadioGroup = (props) => (
	<div>
		<label className="form-label">{props.title}</label>
		<div className="checkbox-group">
			{props.options.map(option => {
				return (
					<label key={option} className="form-label capitalize">
						<input
							className="form-checkbox"
							name={props.setName}
							onChange={props.controlFunc}
							value={option}
                            //determines if checkbox or radio is checked by taking a boolean
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} /> {option}
					</label>
				);
			})}
		</div>
	</div>
);

/* ============= CHECKBOX OR RADIO INPUT PROPS =============
"React.PropTypes" use for indicating the type of the prop(string, number, array, object, etc.), if it is required (isRequired), etc.*/
CheckboxOrRadioGroup.propTypes = {
    // string rendered to input label
    title: PropTypes.string.isRequired,
    //determines type checkbox or radio button
	type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    //name attribute string
    setName: PropTypes.string.isRequired,
    //array of strings
    options: PropTypes.array.isRequired,
     //prepopulated array data options (selected options that will render as choices)
    selectedOptions: PropTypes.array,
    //adds or removes strings from selectedOptions
	controlFunc: PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;