import React from 'react';

export class CompareButton extends React.Component {

    handleClick() {
        this.props.compareSegments();
    }

    render() {
        return <button onClick={this.handleClick.bind(this)}>Compare</button>
    }

}