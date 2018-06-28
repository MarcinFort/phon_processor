import React from 'react';
import { AddFeatureButton } from './AddFeatureButton';
import { ValuePicker } from './ValuePicker';
import { FeaturePicker } from './FeaturePicker';

export class SegmentDiv extends React.Component {
    
    state = {
        currentFeature: "",
        features: []
    };
    
    addFeature() {
        if (!this.state.features.includes(this.state.currentFeature)) {
            this.setState({
                features: this.state.features.concat(this.state.currentFeature)
            })
        }
    }

    render() {

        return (   
            <div class="segmentDiv">
                <ValuePicker />
                <FeaturePicker />
                <AddFeatureButton addFeature={this.addFeature.bind(this)}/>
                <div class="segmentSpecs">
                    {this.state.features}
                </div>
            </div>
        )
    }
}