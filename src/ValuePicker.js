import React from 'react';


export class ValuePicker extends React.Component {

    render() {
        return (
        <select>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="alpha">α</option>
            <option value="-alpha">-α</option>
            <option value="beta">β</option>
            <option value="-beta">-β</option>
        </select>)
    }

}