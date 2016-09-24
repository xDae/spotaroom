import React from 'react';

const AppLogo = ({slogan}) => {
	let renderSlogan = text => {
		if (text) {
			return <span className="app-logo__slogan">{text}</span>;
		}
	};

	return (
		<div className="app-logo">
			<h1 className="app-logo__main">spot<span className="app-logo__circled">a</span>room</h1>
			{renderSlogan(slogan)}
		</div>
	)
};

AppLogo.propTypes = {
	slogan: React.PropTypes.string
};

export default AppLogo;
