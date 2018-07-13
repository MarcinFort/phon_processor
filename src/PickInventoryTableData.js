import React from 'react';

export class PickInventoryTableData extends React.Component {

    state = {
        selected: false
    }

    handleChange() {
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