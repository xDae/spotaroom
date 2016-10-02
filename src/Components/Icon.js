import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from 'font-awesome/css/font-awesome.min.css';

const Icon = ({icon, className}) => {
	let iconClass = classNames('fa', {
		[`fa-${icon}`]: true
	});

	return <i styleName={iconClass} className={className} aria-hidden="true"></i>;
};

Icon.propTypes = {
	icon: React.PropTypes.string.isRequired,
	className: React.PropTypes.string
};

export default CSSModules(Icon, styles, {allowMultiple: true});
