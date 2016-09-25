import React from 'react';

const RoomCard = ({}) => (
	<div className="card u-mb--large">
		<div className="card__img">
			<a href="#"><img src="https://d1052pu3rm1xk9.cloudfront.net/smww_768_verified_ur_6_50/15c70201f731d39e96a2f91290305c3d83c435c7555d2f0619b800af.jpg" alt="Budget 9 Sqm Studio for Rent Near Gar du Nord, Paris" /></a>
		</div>
		<div className="card__info">
			<div className="card__title-wrapper u-mb">
				<h3 className="card__title">
					<a className="card__link" href="#">Budget 9 Sqm Studio for Rent Near Gar du Nord, Paris
					</a>
				</h3>
				<div className="card__price u-mt u-ml">
					<span className="price-tag">421€</span>
				</div>
			</div>
			<div className="card__buttons">
				<a className="button button--secondary u-mr" href="#">More details</a>
				<a className="button button--primary" href="#">Book now!</a>
			</div>
		</div>
	</div>
);

// RoomCard.propTypes = {
// 	: React.PropTypes.
// };

export default RoomCard;
