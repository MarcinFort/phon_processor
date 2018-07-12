import React from 'react';
import { featuresAPI } from './data/FeaturesAPI';
import { IndivSegmentRow } from './IndivSegmentRow';

export class InvWindow extends React.Component {

    state = {
        headerFeatures: undefined,
        featuresAPICopy: undefined,
        filteredInv: undefined,
        filteredInvChanged: undefined,
        sortedData: undefined
    }

    checkSegment(segment, features) {
        for (let prop in features) {
            if (segment[prop] !== features[prop]) {
                return false;
            }
        }
        return true;
    }

    onSort(event, header) {
        let data = this.state.sortedData ? this.state.sortedData : (this.state.filteredInvChanged ? this.state.filteredInvChanged : this.state.filteredInv);
        data.sort((a,b) => a[header].localeCompare(b[header]));
        this.setState({
            sortedData: data
        })
    }

    componentWillMount() {
        let headerFeatures = Object.keys(featuresAPI[0]).slice(1);
        let featuresAPICopy = JSON.parse(JSON.stringify(featuresAPI)); // We need a deep copy to avoid overwriting the API

        this.setState({
            headerFeatures: headerFeatures,
            featuresAPICopy: featuresAPICopy
        })
    }

    componentWillUpdate(nextProps) {
        if (nextProps !== this.props) {

            let filteredInv = this.state.featuresAPICopy.filter(x => {
                return this.checkSegment(x, nextProps.input_features);
            });
    
            let filteredInvChanged;
        
            if (JSON.stringify(nextProps.structural_change).length > 2) {                
                filteredInvChanged = filteredInv.map(x => {
                    for (let prop in nextProps.structural_change) {
                        x[prop] = nextProps.structural_change[prop]
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

            this.setState({
                filteredInv: filteredInv,
                filteredInvChanged: filteredInvChanged
            })
        }

    }

    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <th onClick={event => this.onSort(event, 'Input')}>Input</th>
                        <th>    </th>
                        <th onClick={event => this.onSort(event, 'Output')}>Output</th>
                        {this.state.headerFeatures.map(x => <th onClick={event => this.onSort(event, x)}>{x}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {JSON.stringify(this.props.input_features).length > 2 ? (this.state.filteredInvChanged ? this.state.filteredInvChanged.map(y => <IndivSegmentRow spec={y} />) : this.state.filteredInv.map(y => <IndivSegmentRow spec={y} />)) : <tr></tr>}
                </tbody>
            </table>    
        )
    }


}