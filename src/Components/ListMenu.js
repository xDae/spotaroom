import React from 'react';

import './../styles/ListMenu.scss';

const ListMenu = ({children}) => (
	<ul className="list-menu">
		{children}
	</ul>
);

ListMenu.propTypes = {
	children: React.PropTypes.arrayOf(React.PropTypes.element)
};

const ListItem = ({link, text}) => (
	<li className="list-menu__item">
		<a className="list-menu__link" href={link}>{text}</a>
	</li>
);

ListItem.defaultProps = {
	link: '#'
};

ListItem.propTypes = {
	text: React.PropTypes.string.isRequired,
	link: React.PropTypes.string
};

export { ListMenu, ListItem };
