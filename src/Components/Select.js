import React from 'react';

const Select = ({title, value, rightIcon, className, children}) => {
	let labelTitle = title => <label className="label-title u-mb">{title}</label>;

	return (
		<div className={className}>
			{labelTitle(title)}
			<div className="select">
				<select defaultValue={value} name="property-type" className="select__input">
					{children}
				</select>
				{rightIcon}
			</div>
		</div>
	)
};


Select.propTypes = {
	title: React.PropTypes.string,
	rightIcon: React.PropTypes.element
};

export default Select;
