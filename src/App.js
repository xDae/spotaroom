import React, { Component } from 'react';
import axios from 'axios';

// Components
import AppHeader from './Components/AppHeader';
import Sidebar from './Components/Sidebar';
// import MainContainer from './Components/MainContainer';
import RoomCard from './Components/RoomCard';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			homecards: []
		};
	}

	componentDidMount() {
		axios({
			method: 'get',
			baseUrl: 'https://www.spotahome.com/api/',
			url: '/public/listings/search/homecards/9',
			withCredentials: true
		})
		.then(response => {
			// console.log(response.data.data.homecards);
			let { homecards } = response.data.data;
			this.setState({homecards});
		})
		.catch(error => {
			console.log(error);
		});
	}

	render() {
		return (
			<div className="app-wrapper">
				<AppHeader />

				<div className="main-container">
					<Sidebar />

					<div className="card-container">
						<RoomCard />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
