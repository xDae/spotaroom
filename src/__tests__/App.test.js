import React from 'react';
import { shallow } from 'enzyme';

import App from './../App';

describe('<App />', () => {

	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('should have a default state defined', () => {
		let	app = shallow(<App />);

		expect(app.state('isLoading')).toBe(true);
		expect(app.state('homecards')).toEqual([]);
		expect(app.state('type')).toBe('all');
		expect(app.state('order')).toBe('ASC');
	});

});
