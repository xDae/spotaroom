import React from 'react';

import './../styles/list-menu.css';

const ListMenu = () => (
	<ul className="list-menu">
		<li className="list-menu__item">
			<a className="list-menu__link" href="#">The company</a>
		</li>
		<li className="list-menu__item">
			<a className="list-menu__link" href="#">How we work</a>
		</li>
		<li className="list-menu__item">
			<a className="list-menu__link" href="#">Contact us</a>
		</li>
	</ul>
);

export default ListMenu;
