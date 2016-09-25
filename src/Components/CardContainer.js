import React from 'react';
import sortBy from 'lodash.sortby';

import RoomCard from './RoomCard';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: this.props.rooms
    };
  }

  orderList(list, order = 'ASC') {
    switch(order) {
      case 'ASC':
        return sortBy(list, price => price.pricePerMonth);
      case 'DESC':
          return sortBy(list, price => price.pricePerMonth).reverse();
      default:
        return list;
    }
  }

  componentWillReceiveProps(nextProps) {
    let {rooms, order, type} = nextProps;

    this.setState({
      rooms: this.orderList(rooms, order)
    })
  }

  render() {
    return (
      <div className="card-container">
        {this.state.rooms.map(({id, title, mainPhotoUrl, pricePerMonth}) => (
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

CardContainer.propTypes = {
  rooms: React.PropTypes.array
};

export default CardContainer;
