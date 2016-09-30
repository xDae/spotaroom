import React from 'react';

import './../styles/AppLogo.css';

const AppLogo = ({slogan}) => {
	let renderSlogan = text => {
		if (text) {
			return <span className="app-logo__slogan">{text}</span>;
		}
	};

	return (
		<div className="app-logo">
			<h1 className="app-logo__main">spot<span className="app-logo__circled">a</span>room
				{renderSlogan(slogan)}
			</h1>
		</div>
	)
};

AppLogo.propTypes = {
	slogan: React.PropTypes.string
};

export default AppLogo;
