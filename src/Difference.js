import React from 'react';
import { SegmentPicker } from './SegmentPicker';

export class Difference extends React.Component {

    state = {
        sound1: {},
        sound2: {}
    }

    render() {
        return (
            <div>
                <p>See how any two sounds differ in terms of distinctive features</p>
                <SegmentPicker />
                <SegmentPicker />
            </div>
        )
    }
}