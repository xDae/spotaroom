import React from 'react';

import './../styles/ListMenu.css';

const ListMenu = ({children}) => (
	<ul className="list-menu">
		{children}
	</ul>
);

ListMenu.propTypes = {
	children: React.PropTypes.arrayOf(React.PropTypes.element)
};

export default ListMenu;
