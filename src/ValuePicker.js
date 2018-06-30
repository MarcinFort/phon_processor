import React from 'react';


export class ValuePicker extends React.Component {

    state = {
        value: "+"
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
        <select value={this.state.value} onChange={this.handleChange.bind(this)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="alpha">α</option>
            <option value="-alpha">-α</option>
            <option value="beta">β</option>
            <option value="-beta">-β</option>
        </select>)
    }

}