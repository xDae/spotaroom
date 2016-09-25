import React from 'react';

const Sidebar = ({children}) => (
	<div className="sidebar">
		<h2 className="h2-title u-mb--large">Filters</h2>
		{children}
	</div>
);

export default Sidebar;
