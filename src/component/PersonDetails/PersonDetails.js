import React, { Component } from 'react';

import SwapiService from '../../service/SwapiService';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => this.setState({
                person
            }));
    }

    render() {
        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     alt='person image'/>
                <div>
                    <h4>{name}</h4>
                    <ul>
                        <li>
                            <span>Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li>
                            <span>Birth year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li>
                            <span>Eye color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    };
};