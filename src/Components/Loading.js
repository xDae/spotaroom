import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './../styles/Loading.scss';

const Loading = ({text, className}) => (
	<div styleName="loading" className={className}>
		<div>
			{/* <div styleName="c1"></div> */}
			<div styleName="c2"></div>
			<div styleName="c3"></div>
			<div styleName="c4"></div>
		</div>
		<span>{text}</span>
	</div>
);

Loading.propTypes = {
	text: React.PropTypes.string
};

export default CSSModules(Loading, styles, {allowMultiple: true});
