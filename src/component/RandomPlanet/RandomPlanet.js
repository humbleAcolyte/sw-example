import React, { Component } from 'react';

import SwapiService from '../../service/SwapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(error || loading);
        const errorMsg = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <div className='random-planet'>
                {errorMsg}
                {spinner}
                {content}
            </div>
        );
    }
};

const PlanetView = ({planet}) => {
    const { id, name, population, rotationPeriod, diametr } = planet;

    return (
        <React.Fragment>
            <img className='planet-img'
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                     alt='planet image'/>
            <div>
                <h4>{name}</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <span className='term'>Population</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diametr</span>
                        <span>{diametr}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};