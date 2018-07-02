import React from 'react';

export class IndivSegment extends React.Component {

    state = {
        isHovering: false
    }

    handleMouseHover() {
        this.setState({
            isHovering: !this.state.isHovering
        })
    }

    render() {

        let values = Object.values(this.props.spec);
        let features = Object.keys(this.props.spec);

        return(
            <div onMouseEnter={this.handleMouseHover.bind(this)} onMouseLeave={this.handleMouseHover.bind(this)}>
                <div>{this.props.spec.ipa}</div>
                {this.state.isHovering && <ul>{features.map((feature, index) => <li>{values[index]} {features[index]}</li>)}</ul>}
            </div>
        )
    }

}