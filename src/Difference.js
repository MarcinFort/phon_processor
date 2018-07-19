import React from 'react';
import { SegmentPicker } from './SegmentPicker';
import { ComparisonWindow } from './ComparisonWindow';
import { ShowIrrelevantFeatures } from './ShowIrrelevantFeatures';
import { UseFullInv } from './UseFullInv';

export class Difference extends React.Component {

    state = {
        sound1: "",
        sound2: "",
        showIrrelevant: false,
        useFullInv: false
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

    useFullInv() {
        this.setState({
            useFullInv: !this.state.useFullInv
        })
    }

    showIrrelevantFeatures(value) {
        this.setState({
            showIrrelevant: value
        })
    }

    render() {
        return (
            <div id="difference">
                <p>Pick any two sounds and see how they differ in terms of distinctive features.</p>
                <UseFullInv selection={this.state.useFullInv} toggleUseFullInv={this.useFullInv.bind(this)}/>
                <ShowIrrelevantFeatures checked={this.state.showIrrelevant} toggleShowIrrelevantFeatures={this.showIrrelevantFeatures.bind(this)}/>
                <SegmentPicker pickSegment={this.pickSound1.bind(this)} useFullInv={this.state.useFullInv} inventory={this.props.inventory} />
                <SegmentPicker pickSegment={this.pickSound2.bind(this)} useFullInv={this.state.useFullInv} inventory={this.props.inventory} />
                <ComparisonWindow sound1={this.state.sound1} sound2={this.state.sound2} showIrrelevant={this.state.showIrrelevant} />
            </div>
        )
    }
}