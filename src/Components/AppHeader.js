import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import AppLogo from './AppLogo';
import { ListMenu, ListItem } from './ListMenu';

import styles from './../styles/AppHeader.scss';

const AppHeader = ({className}) => (
	<div styleName="app-header" className={className}>
		<AppLogo slogan="The best to find your home"/>
		<ListMenu>
			<ListItem text="The company" />
			<ListItem text="How we work" />
			<ListItem text="Contact us" />
		</ListMenu>
	</div>
);

export default CSSModules(AppHeader, styles, {allowMultiple: true});
