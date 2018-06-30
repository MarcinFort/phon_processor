import React from 'react';
import { AddFeatureButton } from './AddFeatureButton';
import { ValuePicker } from './ValuePicker';
import { FeaturePicker } from './FeaturePicker';
import { SegmentWindow } from './SegmentWindow';

export class SegmentDiv extends React.Component {
    
    state = {
        currentFeature: { consonantal: "+" },
        features: {}
    };
    
    updateCurrentValue(val) {
        let feature = Object.keys(this.state.currentFeature)[0];
        this.setState({
            currentFeature: { [feature]: val }
        })
    }

    addFeature() {    
        this.setState(prevState => ({
            features: Object.assign(prevState.features, this.state.currentFeature)
        }))
    }

    render() {

        return (   
            <div class="segmentDiv">
                <ValuePicker updateCurrentValue={this.updateCurrentValue.bind(this)}/>
                <FeaturePicker />
                <AddFeatureButton addFeature={this.addFeature.bind(this)}/>
                <SegmentWindow features={this.state.features}/>
            </div>
        )
    }
}