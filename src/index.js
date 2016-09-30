import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';

// css reset:
import 'ress';
import './styles/main.css';

ReactDOM.render(
	<Router history={browserHistory}>
    <Route path="/" component={App}>
			<Route path=":page" component={App}/>
		</Route>
		<Route path="*" component={App}/>
  </Router>,
  document.getElementById('root')
);
