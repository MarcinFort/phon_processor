import React from 'react';

export class RemoveFeature extends React.Component {

    componentDidMount() {
        console.log(this.props.removeFeature);
    }

    handleClick() {
        this.props.removeFeature(this.props.feature);
    }

    render() {
        return <button onClick={this.handleClick.bind(this)}>X</button>
    }
}