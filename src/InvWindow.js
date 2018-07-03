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
        let filteredInv = featuresAPI.filter(x => {
            return this.checkSegment(x, this.props.features);
        });

        let headerFeatures = Object.keys(featuresAPI[0]).slice(1);
        console.log(headerFeatures)
    
        return (
            <table>
                <tr>
                    <th>Input</th>
                    <th>    </th>
                    <th>Output</th>
                    {headerFeatures.map(x => <th>{x}</th>)}
                </tr>
                {JSON.stringify(this.props.features).length > 2 ? filteredInv.map(y => <IndivSegmentRow spec={y} />) : <span></span>}
            </table>
        )
    }


}