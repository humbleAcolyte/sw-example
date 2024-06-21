import React from 'react';

import ItemList from '../ItemList';
import {
	compose,
	WithData,
	WithChildFunction,
	WithSwService
} from '../Wrappers';

const renderLabel = ({ name }) => <span>{name}</span>;

const mapPersonMethodsToProps = (service) => {
	return {
		getData: service.getAllPeople
	};
};

const mapPlanetMethodsToProps = (service) => {
	return {
		getData: service.getAllPlanets
	};
};

const mapStarshipMethodsToProps = (service) => {
	return {
		getData: service.getAllStarships
	};
};

const PersonList = compose(
										WithSwService(mapPersonMethodsToProps),
										WithData,
										WithChildFunction(renderLabel)
									)(ItemList);

const PlanetList = compose(
										WithSwService(mapPlanetMethodsToProps),
										WithData,
										WithChildFunction(renderLabel)
									)(ItemList);

const StarshipList = compose(
											WithSwService(mapStarshipMethodsToProps),
											WithData,
											WithChildFunction(renderLabel)
										)(ItemList);

export {
	PersonList,
	PlanetList,
	StarshipList
};
