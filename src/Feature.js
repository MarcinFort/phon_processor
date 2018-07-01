import React from 'react';
import { RemoveFeature } from './RemoveFeature';

export class Feature extends React.Component {

    render() {
        return(
            <li>{this.props.value} {this.props.feature} <RemoveFeature feature={this.props.feature} removeFeature={this.props.removeFeature}/></li>
        )
    }

}