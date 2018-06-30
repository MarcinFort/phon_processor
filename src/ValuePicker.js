import React from 'react';


export class ValuePicker extends React.Component {

    handleChange(event) {
        this.props.updateCurrentValue(event.target.value);
    }

    render() {
        return (
            <select onChange={this.handleChange.bind(this)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="alpha">α</option>
                <option value="-alpha">-α</option>
                <option value="beta">β</option>
                <option value="-beta">-β</option>
            </select>
        )
    }

}