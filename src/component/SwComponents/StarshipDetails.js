import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { WithSwService } from '../Wrappers';

const StarshipDetails = (props) => {
	return (
		<ItemDetails {...props} >
	    <Record field='model' label='Model' />
		</ItemDetails>
	);
};

const mapMethodsToProps = (service) => {
	return {
		getData: service.getStarship,
		getImageUrl: service.getStarshipImage
	};
};

export default WithSwService(mapMethodsToProps)(StarshipDetails);
