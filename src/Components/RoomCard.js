import React from 'react';
import Button from './Button';
import PriceTag from './PriceTag';

const RoomCard = ({title, photo, price}) => (
	<div className="card u-mb--large">
		<div className="card__img">
			<a href="#"><img src={photo} alt={title} /></a>
		</div>
		<div className="card__info">
			<div className="card__title-wrapper u-mb">
				<h3 className="card__title">
					<a className="card__link" href="#">{title}</a>
				</h3>
				<div className="card__price u-mt u-ml">
					<PriceTag price={price} currency="€" />
				</div>
			</div>
			<div className="card__buttons">
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

export default RoomCard;
