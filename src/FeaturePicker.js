import React from 'react';


export class FeaturePicker extends React.Component {

    state = {
        value: "syllabic"
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
        <select value={this.state.value} onChange={this.handleChange.bind(this)}>
            <option value="syllabic">syllabic</option>
            <option value="stress">stress</option>
            <option value="long">long</option>
            <option value="consonantal">consonantal</option>
            <option value="sonorant">sonorant</option>
            <option value="continuant">continuant</option>
            <option value="delayed release">delayed release</option>
            <option value="approximant">approximant</option>
            <option value="tap">tap</option>
            <option value="trill">trill</option>
            <option value="nasal">nasal</option>
            <option value="voice">voice</option>
            <option value="spread gl">spread gl</option>
            <option value="constr gl">constr gl</option>
            <option value="labial">labial</option>
            <option value="round">round</option>
            <option value="labiodental">labiodental</option>
            <option value="coronal">coronal</option>
            <option value="anterior">anterior</option>
            <option value="distributed">distributed</option>
            <option value="strident">strident</option>
            <option value="lateral">lateral</option>
            <option value="dorsal">dorsal</option>
            <option value="high">high</option>
            <option value="low">low</option>
            <option value="front">front</option>
            <option value="back">back</option>
            <option value="tense">tense</option>
        </select>)
    }

}