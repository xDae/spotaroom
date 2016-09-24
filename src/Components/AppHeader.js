import React from 'react';

// Components
import AppLogo from './AppLogo'
import ListMenu from './ListMenu'

const AppHeader = () => (
	<div className="app-header">
		<AppLogo slogan="The best to find your home"/>
		<ListMenu />
	</div>
);

export default AppHeader;
