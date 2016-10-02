import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './../styles/Card.scss';

import Button from './Button';
import PriceTag from './PriceTag';

const RoomCard = ({title, photo, price, className}) => (
	<div styleName="card" className="u-mb--large">
		<div styleName="card__img">
			<a href="#"><img src={photo} alt={title} /></a>
		</div>
		<div styleName="card__info">
			<div styleName="card__title-wrapper" className="u-mb">
				<h3 styleName="card__title">
					<a styleName="card__link" href="#">{title}</a>
				</h3>
				<div styleName="card__price">
					<PriceTag price={price} currency="€" />
				</div>
			</div>
			<div styleName="card__buttons">
				<Button className="u-mr" type="secondary" text="More details" />
				<Button type="primary" text="Book now!" />
			</div>
		</div>
	</div>
);

RoomCard.propTypes = {
	title: React.PropTypes.string,
	photo: React.PropTypes.string,
	price: React.PropTypes.number
};

export default CSSModules(RoomCard, styles, {allowMultiple: true});
