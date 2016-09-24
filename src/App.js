import React, { Component } from 'react';

// Components
import AppHeader from './Components/AppHeader';
import MainContainer from './Components/MainContainer';

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
