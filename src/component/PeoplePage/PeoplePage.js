import React, { Component } from 'react';

import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../service/SwapiService';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
            <div>
                <ItemList onItemSelected={this.onPersonSelected}
                          getData={this.swapiService.getAllPeople} />
                <PersonDetails personId={this.state.selectedPerson}/>
                <ErrorButton />
            </div>
        );
    }
};