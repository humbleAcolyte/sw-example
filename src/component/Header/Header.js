import React, { Component } from 'react';

import ErrorButton from '../ErrorButton';

import './Header.css';

export default class Header extends Component {

    render() {
        return (
            <div className='header'>
                <h1>SW Example</h1>
                <div className='header-menu'>
                    <button className='header-menu-button'>People</button>
                    <ErrorButton />
                </div>
            </div>
        );
    }
};