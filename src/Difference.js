import React from 'react';
import { SegmentPicker } from './SegmentPicker';
import { CompareButton } from './CompareButton';
import { ComparisonWindow } from './ComparisonWindow';

export class Difference extends React.Component {

    state = {
        sound1: "",
        sound2: ""
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

    render() {
        return (
            <div>
                <p>See how any two sounds differ in terms of distinctive features</p>
                <SegmentPicker pickSegment={this.pickSound1.bind(this)}/>
                <SegmentPicker pickSegment={this.pickSound2.bind(this)}/>
                <CompareButton />
                <ComparisonWindow sound1={this.state.sound1} sound2={this.state.sound2}/>
            </div>
        )
    }
}