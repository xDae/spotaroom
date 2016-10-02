import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './../styles/PriceTag.scss';

const PriceTag = ({price, currency}) => (
	<span styleName="price-tag">{price}{currency}</span>
);

PriceTag.propTypes = {
	price: React.PropTypes.number.isRequired,
	currency: React.PropTypes.string.isRequired
};

export default CSSModules(PriceTag, styles, {allowMultiple: true});
