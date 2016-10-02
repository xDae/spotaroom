import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './../styles/AppLogo.scss';

const AppLogo = ({slogan, className}) => {
	let renderSlogan = text => {
		if (text) {
			return <span styleName="app-logo__slogan" className={className}>{text}</span>;
		}
	};

	return (
		<div styleName="app-logo" className={className}>
			<h1 styleName="app-logo__main" className={className}>spot<span styleName="app-logo__circled" className={className}>a</span>room
				{renderSlogan(slogan)}
			</h1>
		</div>
	)
};

AppLogo.propTypes = {
	slogan: React.PropTypes.string
};

export default CSSModules(AppLogo, styles, {allowMultiple: true});
