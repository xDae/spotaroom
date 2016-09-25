import React from 'react';

const PriceTag = ({price, currency}) => (
	<span className="price-tag">{price}{currency}</span>
);

PriceTag.propTypes = {
	price: React.PropTypes.number.isRequired,
	currency: React.PropTypes.string.isRequired
};

export default PriceTag;