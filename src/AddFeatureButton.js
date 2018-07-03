import React from 'react';

export class AddFeatureButton extends React.Component {

    handleClick() {
        this.props.addFeature(this.props.feature);
    }

    render() {
        return <button onClick={this.handleClick.bind(this)}>Add</button>
    }

}