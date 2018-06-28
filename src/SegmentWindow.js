import React from 'react';

export class SegmentWindow extends React.Component {
    
    render() {
        return (
            <div>
                {
                    Object.keys(this.props.features).map(
                        key => <p>{this.props.features[key]}{key}</p>
                    )
                }
            </div>
        )
    }
}