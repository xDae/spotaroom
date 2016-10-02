import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './../styles/ListMenu.scss';

const ListMenu = CSSModules(({children, className}) => (
	<ul styleName="list-menu" className={className}>
		{children}
	</ul>
), styles, {allowMultiple: true});;

ListMenu.propTypes = {
	children: React.PropTypes.arrayOf(React.PropTypes.element)
};

const ListItem = CSSModules(({link, text}) => (
	<li styleName="list-menu__item">
		<a styleName="list-menu__link" href={link}>{text}</a>
	</li>
), styles, {allowMultiple: true});

ListItem.defaultProps = {
	link: '#'
};

ListItem.propTypes = {
	text: React.PropTypes.string.isRequired,
	link: React.PropTypes.string
};

export {ListMenu, ListItem}
