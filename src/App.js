import React, { Component } from 'react';

import getRooms from './getRooms';

// Components
import AppHeader from './Components/AppHeader';
import Sidebar from './Components/Sidebar';
import CardContainer from './Components/CardContainer';
import Button from './Components/Button';
import Select from './Components/Select';
import Icon from './Components/Icon';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homecards: [],
      type: 'all',
      order: 'ASC'
    };
  }

  componentDidMount() {
    getRooms()
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
          <Sidebar>
            <Select
              value={this.state.type}
              className="sidebar__sorting"
              title="Property type:"
              rightIcon={<Icon className="select__icon" type="angle-down" />}
            >
              <option value="all" defaultValue>All</option>
              <option value="room_shared">Room shared</option>
              <option value="studio">Studio</option>
            </Select>

            <Select
              value={this.state.order}
              className="sidebar__sorting"
              title="Property type:"
              rightIcon={<Icon className="select__icon" type="angle-down" />}
            >
              <option value="ASC" defaultValue>Ascending</option>
              <option value="DES">Descending</option>
            </Select>

            <Button className="u-mr" type="primary" text="Download JSON" />
          </Sidebar>

          <CardContainer
            rooms={this.state.homecards}
            order={this.state.order}
            type={this.state.type}
          />
        </div>
      </div>
    );
  }
}

export default App;
