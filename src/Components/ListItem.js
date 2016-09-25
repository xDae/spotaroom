import React from 'react';

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

export default ListItem;
