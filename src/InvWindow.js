import React from 'react';
import { featuresAPI } from './data/FeaturesAPI';
import { IndivSegment } from './IndivSegment';

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
    
        return JSON.stringify(this.props.features).length > 2 ? filteredInv.map(y => <IndivSegment spec={y} />) : <span></span>
    }


}