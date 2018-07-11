import React from 'react';
import { SegmentPicker } from './SegmentPicker';
import { ComparisonWindow } from './ComparisonWindow';
import { ShowIrrelevantFeatures } from './ShowIrrelevantFeatures';

export class Difference extends React.Component {

    state = {
        sound1: "",
        sound2: "",
        showIrrelevant: false
    }

    pickSound1(sound) {
        this.setState({
            sound1: sound
        })
    }

    pickSound2(sound) {
        this.setState({
            sound2: sound
        })
    }

    showIrrelevantFeatures(value) {
        this.setState({
            showIrrelevant: value
        })
    }

    render() {
        return (
            <div>
                <p>See how any two sounds differ in terms of distinctive features</p>
                <ShowIrrelevantFeatures checked={this.state.showIrrelevant} toggleShowIrrelevantFeatures={this.showIrrelevantFeatures.bind(this)}/>
                <SegmentPicker pickSegment={this.pickSound1.bind(this)}/>
                <SegmentPicker pickSegment={this.pickSound2.bind(this)}/>
                <ComparisonWindow sound1={this.state.sound1} sound2={this.state.sound2} showIrrelevant={this.state.showIrrelevant}/>
            </div>
        )
    }
}