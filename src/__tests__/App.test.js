import React from 'react';
import { shallow } from 'enzyme';

import App from './../App';

describe('<App />', () => {

	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('have a default state defined', () => {
		let	app = shallow(<App />);

		expect(app.state('isLoading')).toBe(true);
		expect(app.state('homecards')).toEqual([]);
		expect(app.state('type')).toBe('all');
		expect(app.state('order')).toBe('ASC');
	});

	it('renders a <AppHeader /> Component', function () {
		let	app = shallow(<App />);

		expect(app.find('AppHeader').length).toEqual(1);
	});

	it('shows <loading /> component when its loading', () => {
		let	app = shallow(<App />);

    expect(app.find('Loading').length).toEqual(1);
  });

	it('shows <CardContainer /> when loading has finished', function () {
		let	app = shallow(<App />);

		app.setState({ isLoading: false });
		expect(app.find('CardContainer').length).toEqual(1);
	});

});
