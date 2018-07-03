import React from 'react';

export class IndivSegmentRow extends React.Component {


    render() {

        let values = Object.values(this.props.spec).slice(1);

        return(
            <tr>
                <td>{this.props.spec.ipa}</td>
                <td>→</td>
                <td>?</td>
                {values.map((value, index) => <td>{values[index]}</td>)}
            </tr>
        )
    }

}