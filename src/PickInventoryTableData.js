import React from 'react';

export class PickInventoryTableData extends React.Component {

    handleChange() {
        if (this.props.ipa.length === 0 || this.props.ipa.length > 5) {
            return;
        }
        this.props.toggleSegmentSelection(this.props.ipa);
    }


    render() {

        let styleSelectedSegment = this.props.selected ? "selected" : "unselected";

        return(
            <td onClick={this.handleChange.bind(this)} className={styleSelectedSegment}>{this.props.ipa}</td>
        )
    }

}