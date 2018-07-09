import React from 'react';

export class ComparisonWindow extends React.Component {

    render() {

        return(
            <div>
                {this.props.sound1}
                {this.props.sound2}
            </div>
        )
    }
}