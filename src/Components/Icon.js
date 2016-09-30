import React from 'react';
import classNames from 'classnames';

import 'font-awesome/css/font-awesome.min.css';

const Icon = ({icon, className}) => {
	let iconClass = classNames('fa', {
		[`fa-${icon}`]: true
	}, className);

	return <i className={iconClass} aria-hidden="true"></i>;
};

Icon.propTypes = {
	icon: React.PropTypes.string.isRequired,
	className: React.PropTypes.string
};

export default Icon;
