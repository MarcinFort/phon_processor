import React from 'react';
import { SegmentDiv } from './SegmentDiv';
import { InvWindow } from './InvWindow';

export class PhonProcessor extends React.Component {

    state = {
        input_features: {},
        structural_change: {}
    }

    addInputFeature(feature) {
        this.setState(prevState => ({
            input_features: Object.assign(prevState.input_features, feature)
        }))
    }

    removeInputFeature(feature) {
        let currentFeatures = Object.assign({}, this.state.input_features);
        delete currentFeatures[feature];
        this.setState({
            input_features: currentFeatures
        });
    }

    addSCFeature(feature) {
        this.setState(prevState => ({
            structural_change: Object.assign(prevState.structural_change, feature)
        }))
    }

    removeSCFeature(feature) {
        let currentFeatures = Object.assign({}, this.state.structural_change);
        delete currentFeatures[feature];
        this.setState({
            structural_change: currentFeatures
        });
    }

    render() {
        return (
            <div>
                <p>Add input features:</p>
                <SegmentDiv addFeature={this.addInputFeature.bind(this)} removeFeature={this.removeInputFeature.bind(this)} features={this.state.input_features} key={1} />
                <p>Add features which you would like to change:</p>
                <SegmentDiv addFeature={this.addSCFeature.bind(this)} removeFeature={this.removeSCFeature.bind(this)} features={this.state.structural_change} key={2} />
                <InvWindow inventory={this.props.inventory} input_features={this.state.input_features} structural_change={this.state.structural_change} />
            </div>)
    }

}