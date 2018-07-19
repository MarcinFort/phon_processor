import React from 'react';
import { featuresAPI } from './data/FeaturesAPI';
import { ComparisonRow } from './ComparisonRow';

export class ComparisonWindow extends React.Component {

    render() {

        // Deep copies to avoid overwriting the API

        let fullSpec1 = JSON.parse(JSON.stringify(featuresAPI.filter(x => x.ipa === this.props.sound1)));
        let fullSpec2 = JSON.parse(JSON.stringify(featuresAPI.filter(x => x.ipa === this.props.sound2)));

        if (fullSpec1.length > 0) { delete fullSpec1[0].ipa };
        if (fullSpec2.length > 0) { delete fullSpec2[0].ipa };

        let rowsSpec = [];
        
        if (fullSpec1[0] && fullSpec2[0]) {
            for (let prop in fullSpec1[0]) {
                let arr = [];
                if (fullSpec1[0][prop] === fullSpec2[0][prop]) {
                    if (!this.props.showIrrelevant && fullSpec1[0][prop] === "0" && fullSpec2[0][prop] === "0") {
                        continue;
                    } else {
                        arr.push(fullSpec1[0][prop]+prop);
                    }
                } else {
                    arr.push(fullSpec1[0][prop]+prop, fullSpec2[0][prop]+prop);
                }
                rowsSpec.push(arr);
            }
        }

        return(
            <table>
                <thead>
                    <tr>
                        {this.props.sound1 === "none" || this.props.sound1 === "" ? null : <th>{this.props.sound1}</th>}
                        {this.props.sound2 === "none" || this.props.sound2 === "" ? null : <th>{this.props.sound2}</th>}
                    </tr>
                </thead>
                <tbody>
                    {rowsSpec.map((x, key) => <ComparisonRow spec={x} key={key} />)}
                </tbody>
            </table>
        )
    }
}