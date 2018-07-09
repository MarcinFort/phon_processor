import React from 'react';
import { featuresAPI } from './data/FeaturesAPI';

export class ComparisonWindow extends React.Component {

    render() {

        // Deep copies to avoid overwriting the API

        let fullSpec1 = JSON.parse(JSON.stringify(featuresAPI.filter(x => x.ipa === this.props.sound1)));
        let fullSpec2 = JSON.parse(JSON.stringify(featuresAPI.filter(x => x.ipa === this.props.sound2)));

        return(
            <div>
                {JSON.stringify(fullSpec1)}
                {JSON.stringify(fullSpec2)}
            </div>
        )
    }
}