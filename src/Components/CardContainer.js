import React from 'react';
import CSSModules from 'react-css-modules';
import sortBy from 'lodash.sortby';

import RoomCard from './RoomCard';
import styles from './../styles/CardContainer.scss';

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
    var list = this.filterList(rooms, type);
    return this.orderList(list, order);
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
        return sortBy(list, price => price.pricePerMonth).reverse();
      default:
        return list;
    }
  }

  render() {
    return (
      <div styleName="card-container">
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

export default CSSModules(CardContainer, styles, {allowMultiple: true});
