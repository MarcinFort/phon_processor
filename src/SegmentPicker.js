import React from 'react';
import { featuresAPI } from './data/FeaturesAPI';

export class SegmentPicker extends React.Component {

    handleChange(event) {
        this.props.pickSegment(event.target.value);
    }

    render() {

        let ipa_symbols = [];
        featuresAPI.forEach(x => {
            ipa_symbols.push(x.ipa);
        })

        return(
            <select onChange={this.handleChange.bind(this)}>
                <option value="none" selected>--Choose a segment--</option>
                {ipa_symbols.map((y, key) => <option value={y} key={key}>{y}</option>)}
            </select>
        )    
    }
}