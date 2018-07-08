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

        // We need a deep copy to avoid overwriting the API

        let featuresAPICopy = JSON.parse(JSON.stringify(featuresAPI));

        let filteredInv = featuresAPICopy.filter(x => {
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

        let filteredInvChanged;
        
        if (JSON.stringify(this.props.structural_change).length > 2) {
            
            filteredInvChanged = filteredInv.map(x => {
                for (let prop in this.props.structural_change) {
                    x[prop] = this.props.structural_change[prop]
                }
                let noIPA = JSON.parse(JSON.stringify(x));
                delete noIPA.ipa;
                let changedSegment = featuresAPI.find(y => {
                    return this.checkSegment(y, noIPA);
                });
                changedSegment && changedSegment.ipa ? x.ipa2 = changedSegment.ipa : x.ipa2 = "?";
                return x;
            })
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
                    {JSON.stringify(this.props.input_features).length > 2 ? (filteredInvChanged ? filteredInvChanged.map(y => <IndivSegmentRow spec={y} />) : filteredInv.map(y => <IndivSegmentRow spec={y} />)) : <tr></tr>}
                </tbody>
            </table>    
        )
    }


}