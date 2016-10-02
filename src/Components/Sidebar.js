import React from 'react';
import CSSModules from 'react-css-modules';

import Title from './Title';
import styles from './../styles/Sidebar.scss';

const Sidebar = ({children, className}) => (
	<div styleName="sidebar">
		<Title className={className} text="Filters" />
		{children}
	</div>
);

export default CSSModules(Sidebar, styles, {allowMultiple: true});
