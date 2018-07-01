import React from 'react';

export class RemoveFeature extends React.Component {

    handleClick() {
        this.props.removeFeature(this.props.feature);
    }

    render() {
        return <button onClick={this.handleClick.bind(this)}>X</button>
    }
}