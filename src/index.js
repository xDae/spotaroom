import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';

// Global styles
import 'ress'; // css reset:
import './styles/main.scss';
import './styles/spacing-helpers.scss';

ReactDOM.render(
	<Router history={browserHistory}>
    <Route path="/" component={App}>
			<Route path=":page" component={App}/>
		</Route>
		<Route path="*" component={App}/>
  </Router>,
  document.getElementById('root')
);
