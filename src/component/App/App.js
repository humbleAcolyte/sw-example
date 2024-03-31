import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import ErrorIndicator from '../ErrorIndicator';

import './App.css';


export default class App extends Component {

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
            <div className='app'>
                <Header />
                <RandomPlanet />
                <PeoplePage />
            </div>
        );
    }
};