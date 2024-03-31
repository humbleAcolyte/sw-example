import React, { Component } from 'react';

export default class ErrorButton extends Component {

    state = {
        needError: false
    };

    setError = () => {
        this.setState({
            needError: true
        });
    };

    throwError() {
        this.foo.bar = 0;
    }

    render() {
        if (this.state.needError) {
            this.throwError();
        }
        return <button onClick={this.setError}>Throw error</button>
    }
}