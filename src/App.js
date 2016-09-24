import React, { Component } from 'react';

// Components
import AppHeader from './Components/AppHeader';
import MainContainer from './Components/MainContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<AppHeader />
				<MainContainer />
      </div>
    );
  }
}

export default App;
