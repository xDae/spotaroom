import React from 'react';

import Title from './Title';

const Sidebar = ({children}) => (
	<div className="sidebar">
		<Title className="u-mb--large" text="Filters" />
		{children}
	</div>
);

export default Sidebar;
