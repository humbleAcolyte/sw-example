import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { WithSwService } from '../Wrappers';

const PersonDetails = (props) => {
	return (
		<ItemDetails {...props} >
	    <Record field='gender' label='Gender' />
		</ItemDetails>
	);
};

const mapMethodsToProps = (service) => {
	return {
		getData: service.getPerson,
		getImageUrl: service.getPersonImage
	};
};

export default WithSwService(mapMethodsToProps)(PersonDetails);
