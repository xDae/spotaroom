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

  componentWillReceiveProps(nextProps) {
    let {rooms, order, type} = nextProps;

    this.setState({
      rooms: this.setList(rooms, order, type)
    })
  }

  setList(rooms, order, type) {
    var filteredList = this.filterList(rooms, type);
    return this.orderList(filteredList, order);
  }

  filterList(list, type = 'all') {
    if (type === 'all') {
      return list;
    } else {
      return list.filter(room => room.type === type);
    }
  }

  orderList(list, order = 'ASC') {
    switch(order) {
      case 'ASC':
      return sortBy(list, price => price.pricePerMonth);
      case 'DESC':
      return this.state.rooms.reverse();
      default:
      return list;
    }
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
