import React, { Component } from 'react';

import SwapiService from '../../service/SwapiService';
import Spinner from '../Spinner';

export default class ItemList extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    renderItems(items) {
        return items.map(({id, name}) => {
            return (
                <li key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }

    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner />;
        }

        const items = this.renderItems(itemList);

        return (
            <ul>
                {items}
            </ul>
        );
    }
};