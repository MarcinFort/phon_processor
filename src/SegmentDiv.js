import React from 'react';
import { AddFeatureButton } from './AddFeatureButton';
import { ValuePicker } from './ValuePicker';
import { FeaturePicker } from './FeaturePicker';
import { SegmentWindow } from './SegmentWindow';

export class SegmentDiv extends React.Component {
    
    state = {
        currentFeature: { syllabic: "+" },
        features: {}
    };
    
    updateCurrentValue(val) {
        let feature = Object.keys(this.state.currentFeature)[0];
        this.setState({
            currentFeature: { [feature]: val }
        })
    }

    updateCurrentFeature(feature) {
        let val = Object.values(this.state.currentFeature)[0];
        this.setState({
            currentFeature: { [feature]: val }
        })
    }

    addFeature() {    
        this.setState(prevState => ({
            features: Object.assign(prevState.features, this.state.currentFeature)
        }))
    }

    removeFeature(feature) {
        let currentFeatures = Object.assign({}, this.state.features);
        delete currentFeatures[feature];
        this.setState({
            features: currentFeatures
        });
    }

    render() {

        return (   
            <div class="segmentDiv">
                <ValuePicker updateCurrentValue={this.updateCurrentValue.bind(this)}/>
                <FeaturePicker updateCurrentFeature={this.updateCurrentFeature.bind(this)}/>
                <AddFeatureButton addFeature={this.addFeature.bind(this)}/>
                <SegmentWindow features={this.state.features} removeFeature={this.removeFeature.bind(this)}/>
            </div>
        )
    }
}