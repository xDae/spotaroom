import React from 'react';

const Sidebar = ({}) => (
	<div className="sidebar">
		<h2 className="h2-title u-mb--large">Filters</h2>

		<div className="sidebar__sorting">
			<label className="label-title u-mb">Property type:</label>
			<div className="select">
				<select name="property-type" className="select__input">
					<option value="all" defaultValue>All</option>
					<option value="room_shared">Saab</option>
					<option value="studio">Studio</option>
				</select>
				<i className="fa fa-angle-down select__icon" aria-hidden="true"></i>
			</div>
		</div>

		<div className="sidebar__sorting">
			<label className="label-title u-mb">Sort by price:</label>
			<div className="select">
				<select name="property-type" className="select__input">
					<option value="ascending" defaultValue>Ascending</option>
					<option value="descending">Descending</option>
				</select>
				<i className="fa fa-angle-down select__icon" aria-hidden="true"></i>
			</div>
		</div>

		<button type="button" name="button" className="button button--primary">Download JSON</button>
	</div>
);

// Sidebar.propTypes = {
// 	: React.PropTypes.
// };

export default Sidebar;
