import React from 'react';

import Sidebar from './Sidebar';
import CardContainer from './CardContaner';

class MainContainer extends React.Component {

	render() {
		return (
			<div className="main-contaner">
				<Sidebar />

				<CardContainer>

				</CardContainer>
			</div>
		);
	}

}

export default MainContainer;
