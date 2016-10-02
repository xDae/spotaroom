import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './../styles/Select.scss';

const Select = ({title, value, rightIcon, className, handleChange, children}) => {
	let labelTitle = title => <label className="u-mb">{title}</label>;

	let setValue = event => handleChange(event.target.value);

	return (
		<div className={className}>
			{labelTitle(title)}
			<div styleName="select">
				<select
					onChange={setValue}
					defaultValue={value}
					styleName="select__input"
				>
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

export default CSSModules(Select, styles, {allowMultiple: true});
