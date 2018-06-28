import React from 'react';

export class AddFeatureButton extends React.Component {

    render() {
        return <button onClick={this.props.addFeature}>Add</button>
    }

}