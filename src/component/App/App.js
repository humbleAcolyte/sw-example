import React, { Component } from "react";

import ErrorBoundary from "../ErrorBoundary";
import SwapiService from "../../service/SwapiService";
import { SwapiServiceProvider } from "../SwService";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import {
  LoginPage,
  PeoplePage,
  PlanetsPage,
  SecretPage,
  StarshipsPage,
} from "../Pages";

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { StarshipDetails } from "../SwComponents";

export default class App extends Component {
  state = {
    showRandomPlanet: false,
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  onServiceChange = () => {
    // TO-DO
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="app">
              <Header />
              {/*<RandomPlanet />*/}

              <Routes>
                <Route path="/" element={<h2>Welcome!</h2>} exact />
                <Route path="/people/:id?" element={<PeoplePage />} />
                <Route path="/planets" element={<PlanetsPage />} />
                <Route path="/starships" element={<StarshipsPage />} exact />
                <Route
                  path="/starships/:itemId"
                  element={<StarshipDetails />}
                />
                <Route
                  path="/login"
                  element={
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  }
                  exact
                />
                <Route
                  path="/secret"
                  element={<SecretPage isLoggedIn={isLoggedIn} />}
                  exact
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
