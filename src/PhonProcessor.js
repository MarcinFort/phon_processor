import React from 'react';
import { SegmentDiv } from './SegmentDiv';
import { InvWindow } from './InvWindow';
import { PickInventory } from './PickInventory';

export class PhonProcessor extends React.Component {

    state = {
        inventory: [],
        stage: 1,
        input_features: {},
        structural_change: {}
    }

    toggleSegmentSelection(ipa) {
        if (!this.state.inventory.includes(ipa)) {
            this.setState({
                inventory: this.state.inventory.concat([ipa])
            });
        } else {
            let inv = this.state.inventory.filter(x => x !== ipa);
            this.setState({
                inventory: inv
            });   
        }
    }

    addInputFeature(feature) {
        this.setState(prevState => ({
            input_features: Object.assign(prevState.input_features, feature)
        }))
    }

    removeInputFeature(feature) {
        let currentFeatures = Object.assign({}, this.state.input_features);
        delete currentFeatures[feature];
        this.setState({
            input_features: currentFeatures
        });
    }

    addSCFeature(feature) {
        this.setState(prevState => ({
            structural_change: Object.assign(prevState.structural_change, feature)
        }))
    }

    removeSCFeature(feature) {
        let currentFeatures = Object.assign({}, this.state.structural_change);
        delete currentFeatures[feature];
        this.setState({
            structural_change: currentFeatures
        });
    }

    render() {
        return(
            <div>
                {this.state.stage === 1 ? <PickInventory toggleSegmentSelection={this.toggleSegmentSelection.bind(this)}/> :
                <div>
                    <SegmentDiv addFeature={this.addInputFeature.bind(this)} removeFeature={this.removeInputFeature.bind(this)} features={this.state.input_features} key={1} />
                    <SegmentDiv addFeature={this.addSCFeature.bind(this)} removeFeature={this.removeSCFeature.bind(this)} features={this.state.structural_change} key={2} />
                    <InvWindow inventory = {this.state.inventory} input_features={this.state.input_features} structural_change={this.state.structural_change} />
                </div>
                }
            </div>
        )
    }

}