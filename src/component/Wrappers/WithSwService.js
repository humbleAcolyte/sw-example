import React from 'react';

import { SwapiServiceConsumer } from '../SwService';

const WithSwService = (mapMethodsToProps) => (Wrapped) => {
	return (props) => {
		return (
			<SwapiServiceConsumer>
			{
				(swapiService) => {
					const serviceProps = mapMethodsToProps(swapiService);
					return (
						<Wrapped { ...props } { ...serviceProps } />
					);
				}
			}
			</SwapiServiceConsumer>
		);
	};
};

export default WithSwService;
