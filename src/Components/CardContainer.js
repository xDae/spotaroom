import React from 'react';
import RoomCard from './RoomCard';

class CardContainer extends React.Component {
	constructor(props) {
		super(props);
		// this.state = ;
	}

	render() {
		return (
			<div className="card-container">
				{this.props.rooms.map(({id, title, mainPhotoUrl, pricePerMonth}) => (
					<RoomCard
						key={id}
						title={title}
						photo={mainPhotoUrl}
						price={pricePerMonth}
					/>
				))}
			</div>
		);
	}

}

// CardContainer.propTypes = {
// 	: React.PropTypes.
// };

export default CardContainer;
