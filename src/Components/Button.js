import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './../styles/Button.scss';

const Button = ({link, text, type, className, handleClick}) => {
	let btnClass = classNames('button', {
		[`button--${type}`]: true
	});

	let buttonClick = e => {
		if (handleClick) {
			e.preventDefault();
			handleClick();
		}
	}

	return <a onClick={buttonClick} className={className} styleName={btnClass} href={link}>{text}</a>;
};

Button.defaultProps = {
	link: '#'
};

Button.propTypes = {
	text: React.PropTypes.string.isRequired,
	link: React.PropTypes.string,
	type: React.PropTypes.string.isRequired
};

export default CSSModules(Button, styles, {allowMultiple: true});
