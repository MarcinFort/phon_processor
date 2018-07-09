import React from 'react';
import { SegmentPicker } from './SegmentPicker';
import { CompareButton } from './CompareButton';

export class Difference extends React.Component {

    state = {
        sound1: {},
        sound2: {}
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
            </div>
        )
    }
}