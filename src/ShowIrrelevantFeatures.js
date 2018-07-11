import React from 'react';

export class ShowIrrelevantFeatures extends React.Component {

    handleChange(event) {
        this.props.toggleShowIrrelevantFeatures(event.target.checked);
    }

    render() {
        return <div><input type="checkbox" checked={this.props.checked} onChange={this.handleChange.bind(this)} /> Show irrelevant features</div>
    } 
}