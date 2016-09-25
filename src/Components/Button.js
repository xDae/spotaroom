import React from 'react';
import classNames from 'classnames';

const Button = ({link, text, type, className, handleClick}) => {
	let btnClass = classNames('button', className, {
		[`button--${type}`]: true
	});

	let buttonClick = e => {
		if (handleClick) {
			 e.preventDefault()
			handleClick();
		}
	}

	return <a onClick={buttonClick} className={btnClass} href={link}>{text}</a>;
};

Button.defaultProps = {
	link: '#'
};

Button.propTypes = {
	text: React.PropTypes.string.isRequired,
	link: React.PropTypes.string,
	type: React.PropTypes.string.isRequired
};

export default Button;
