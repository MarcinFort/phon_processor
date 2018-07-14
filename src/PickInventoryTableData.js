import React from 'react';

export class PickInventoryTableData extends React.Component {

    state = {
        selected: false
    }

    handleChange() {
        if (this.props.ipa.length === 0 || this.props.ipa.length > 5) {
            return;
        }
        this.props.toggleSegmentSelection(this.props.ipa);
        this.setState({
            selected: !this.state.selected
        });
    }


    render() {

        let styleSelectedSegment = this.state.selected ? "selected" : "unselected";

        return(
            <td onClick={this.handleChange.bind(this)} className={styleSelectedSegment}>{this.props.ipa}</td>
        )
    }

}