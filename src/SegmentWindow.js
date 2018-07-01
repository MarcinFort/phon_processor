import React from 'react';
import { Feature } from './Feature'

export class SegmentWindow extends React.Component {
    

    render() {

        return (
            <div>
                <ul>
                    {
                        Object.keys(this.props.features).map(
                            key => <Feature value={this.props.features[key].replace(/alpha/, "α").replace(/beta/, "β")} feature={key} removeFeature={this.props.removeFeature}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}