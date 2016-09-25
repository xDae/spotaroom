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
		// this.state = ;
	}

	componentDidMount() {
		axios.get('https://www.spotahome.com/api/public/listings/search/homecards/9')
		.then(function (response) {
			console.log(response);
			console.log(response.data);
	    console.log(response.status);
	    console.log(response.statusText);
	    console.log(response.headers);
	    console.log(response.config);
		})
		.catch(function (error) {
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
