import React from 'react';

const ListMenu = ({children}) => (
	<ul className="list-menu">
		{children}
	</ul>
);

ListMenu.propTypes = {
	children: React.PropTypes.arrayOf(React.PropTypes.element)
};

export default ListMenu;
