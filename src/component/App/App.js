import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import SwapiService from '../../service/SwapiService';
import { SwapiServiceProvider } from '../SwService';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import { PeoplePage } from '../Pages';

import './App.css';

export default class App extends Component {
  state = {
    showRandomPlanet: false,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    // TO-DO
  }

  render() {
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    return (
      <div className='app'>
      	<ErrorBoundary>
	      	<SwapiServiceProvider value={ this.state.swapiService }>
	          <Header />
	          {planet}
	          <PeoplePage />
	        </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  }
};
