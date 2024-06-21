import React, { Component } from 'react';

import './ItemDetails.css';

import SwapiService from '../../service/SwapiService';

const Record = ({ item, field, label }) => {
    return (
        <li>
            <span>{ label }</span>
            <span>{ item[field] }</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => this.setState({
                item,
                image: getImageUrl(item)
            }));
    }

    render() {
        if (!this.state.item) {
            return <span>Select from a list</span>
        }

        const { item, image } = this.state;

        return (
            <div className="item-details">
                <img src={image}
                     alt='image'/>
                <ul>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                </ul>
            </div>
        )
    };
};