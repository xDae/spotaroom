import React from 'react';
import classNames from 'classnames';

const Icon = ({type, className}) => {
	let iconClass = classNames('fa', {
		[`fa-${type}`]: true
	}, className);

	return <i className={iconClass} aria-hidden="true"></i>;
};

Icon.propTypes = {
	type: React.PropTypes.string.isRequired,
	className: React.PropTypes.string
};

export default Icon;
