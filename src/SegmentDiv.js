import React from 'react';
import { AddFeatureButton } from './AddFeatureButton';
import { ValuePicker } from './ValuePicker';
import { FeaturePicker } from './FeaturePicker';

export class SegmentDiv extends React.Component {
    
    state = {
        currentFeature: "",
        features: []
    };
    
    render() {

        return (   
            <div class="segmentDiv">
                <ValuePicker />
                <FeaturePicker />
                <AddFeatureButton />
                <div class="segmentSpecs">
                    {this.state.features}
                </div>
            </div>
        )
    }
}