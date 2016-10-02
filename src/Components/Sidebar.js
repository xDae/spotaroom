import React from 'react';
import CSSModules from 'react-css-modules';

import Title from './Title';
import styles from './../styles/Sidebar.scss';

const Sidebar = ({children, className}) => (
	<div styleName="sidebar" className={className}>
		<Title text="Filters" className="u-mb" />
		{children}
	</div>
);

export default CSSModules(Sidebar, styles, {allowMultiple: true});
