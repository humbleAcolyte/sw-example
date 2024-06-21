import React, { Component } from 'react';

import ListBlock from '../ListBlock';
import { PersonList, PersonDetails } from '../SwComponents';

import './PeoplePage.css';

export default class PeoplePage extends Component {

    state = {
        selectedItem: null
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        const list = (
            <PersonList onItemSelected={this.onPersonSelected} />
        );

        const details = (
            <PersonDetails itemId={ this.state.selectedItem } />
        );

        return (
          <ListBlock list={list}
                     details={details}
          />
        );
    }
};
