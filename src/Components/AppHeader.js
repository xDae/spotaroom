import React from 'react';

// Components
import AppLogo from './AppLogo';
import ListMenu from './ListMenu';
import ListItem from './ListItem';

import './../styles/AppHeader.css';

const AppHeader = () => (
	<div className="app-header u-mv--large">
		<AppLogo slogan="The best to find your home"/>
		<ListMenu>
			<ListItem text="The company" />
			<ListItem text="How we work" />
			<ListItem text="Contact us" />
		</ListMenu>
	</div>
);

export default AppHeader;
