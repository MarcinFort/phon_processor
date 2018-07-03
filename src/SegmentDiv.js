import React from 'react';
import { AddFeatureButton } from './AddFeatureButton';
import { ValuePicker } from './ValuePicker';
import { FeaturePicker } from './FeaturePicker';
import { SegmentWindow } from './SegmentWindow';

export class SegmentDiv extends React.Component {
    
    state = {
        currentFeature: { syllabic: "+" }
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

    render() {

        return (   
            <div className="segmentDiv">
                <ValuePicker updateCurrentValue={this.updateCurrentValue.bind(this)}/>
                <FeaturePicker updateCurrentFeature={this.updateCurrentFeature.bind(this)}/>
                <AddFeatureButton addFeature={this.props.addFeature} feature={this.state.currentFeature}/>
                <SegmentWindow features={this.props.features} removeFeature={this.props.removeFeature}/>
            </div>
        )
    }
}