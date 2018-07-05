import React from 'react';
import { featuresAPI } from './data/FeaturesAPI';
import { IndivSegmentRow } from './IndivSegmentRow';

export class InvWindow extends React.Component {

    checkSegment(segment, features) {
        for (let prop in features) {
            if (segment[prop] !== features[prop]) {
                return false;
            }
        }
        return true;
    }

    render() {

        let headerFeatures = Object.keys(featuresAPI[0]).slice(1);

        let filteredInv = featuresAPI.filter(x => {
            return this.checkSegment(x, this.props.input_features);
        });

        // Merging objects with two loops, since Object.assign causes weird issues

        let newObj = {}

        for (let prop in this.props.structural_change) {
            newObj[prop] = this.props.structural_change[prop]
        }

        for (let prop in this.props.input_features) {
            if (!newObj.hasOwnProperty(prop)) {
                newObj[prop] = this.props.input_features[prop];
            }
        }


        return (
            <table>
                <thead>
                    <tr>
                        <th>Input</th>
                        <th>    </th>
                        <th>Output</th>
                        {headerFeatures.map(x => <th>{x}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {JSON.stringify(this.props.input_features).length > 2 ? filteredInv.map(y => <IndivSegmentRow spec={y} />) : <tr></tr>}
                </tbody>
            </table>
        )
    }


}