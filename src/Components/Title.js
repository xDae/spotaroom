import React from 'react';
import classNames from 'classnames';

import './../styles/Title.scss';

const Title = ({text, className}) => {
	let titleClass = classNames('h2-title', className);

	return <h2 className={titleClass}>{text}</h2>;
}

Title.propTypes = {
	text: React.PropTypes.string.isRequired
};

export default Title;
