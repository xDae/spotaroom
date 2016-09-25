import React, { Component } from 'react';
import download from 'downloadjs';

import getRooms from './getRooms';

// Components
import AppHeader from './Components/AppHeader';
import Loading from './Components/Loading';
import Sidebar from './Components/Sidebar';
import CardContainer from './Components/CardContainer';
import Button from './Components/Button';
import Select from './Components/Select';
import Icon from './Components/Icon';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
			isLoading: true,
      homecards: [],
      type: 'all',
      order: 'ASC'
    };
  }

  componentDidMount() {
    getRooms()
    .then(response => {
      let { homecards } = response.data.data;
      this.setState({
				homecards,
				isLoading: false
			});
    })
    .catch(error => {
      console.log(error);
    });
  }

  setTypeFilter = filter => {
    this.setState({ type: filter });
  }

  setFilterOrder = order => {
    this.setState({ order: order });
  }

  downloadJson = () => {
    download(JSON.stringify(this.state.homecards), 'spotaroom.json', 'application/json');
  }

	renderCards = isLoading => {
		if (isLoading) {
      return <Loading text="loading" />;
    }

		return (
			<CardContainer
				rooms={this.state.homecards}
				order={this.state.order}
				type={this.state.type}
			/>
		)
	}

  render() {
    return (
      <div className="app-wrapper">
        <AppHeader />

        <div className="main-container">
          <Sidebar>
            <Select
              handleChange={this.setTypeFilter}
              value={this.state.type}
              className="sidebar__sorting"
              title="Property type:"
              rightIcon={<Icon className="select__icon" icon="angle-down" />}
            >
              <option value="all">All</option>
              <option value="room_shared">Room shared</option>
              <option value="studio">Studio</option>
              <option value="residence">Residence</option>
            </Select>

            <Select
              handleChange={this.setFilterOrder}
              value={this.state.order}
              className="sidebar__sorting"
              title="Sort by price:"
              rightIcon={<Icon className="select__icon" icon="angle-down" />}
            >
              <option value="ASC">Ascending</option>
              <option value="DESC">Descending</option>
            </Select>

            <Button
              className="u-mr"
              type="primary"
              text="Download JSON"
              handleClick={this.downloadJson}
            />
          </Sidebar>

					{this.renderCards(this.state.isLoading)}

        </div>
      </div>
    );
  }
}

export default App;
