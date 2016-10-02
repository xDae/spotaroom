import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './../styles/Title.scss';

const Title = ({text, className}) => {
	return <h2 styleName="h2-title" className={className}>{text}</h2>;
}

Title.propTypes = {
	text: React.PropTypes.string.isRequired
};

export default CSSModules(Title, styles, {allowMultiple: true});
