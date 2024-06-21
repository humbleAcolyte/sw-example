import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { WithSwService } from '../Wrappers';

const PlanetDetails = (props) => {
	return (
		<ItemDetails {...props} >
	    <Record field='population' label='Population' />
		</ItemDetails>
	);
};

const mapMethodsToProps = (service) => {
	return {
		getData: service.getPlanet,
		getImageUrl: service.getPlanetImage
	};
};

export default WithSwService(mapMethodsToProps)(PlanetDetails);
