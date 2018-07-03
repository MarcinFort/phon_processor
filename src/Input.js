import React from 'react';
import { SegmentDiv } from './SegmentDiv';

export class InputDiv extends React.Component {

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

    render() {
        return(
            <SegmentDiv addFeature={this.addInputFeature.bind(this)} removeFeature={this.removeInputFeature.bind(this)} features={this.state.input_features}/>
        )
    }

}