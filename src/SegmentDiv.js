import React from 'react';

export class SegmentDiv extends React.Component {
    
    state = {
        features: []
    };
    
    render() {

        <div class="segmentDiv">
            <ValuePicker />
            <FeaturePicker />
            <div class="segmentSpecs">
                {this.state.features}
            </div>
        </div>
    }
}