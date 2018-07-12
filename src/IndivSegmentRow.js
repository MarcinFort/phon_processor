import React from 'react';

export class IndivSegmentRow extends React.Component {

    render() {

        let values = Object.values(this.props.spec).slice(1, 29);

        return(
            <tr>
                <td>{this.props.spec.index}</td>
                <td>{this.props.spec.ipa}</td>
                <td>→</td>
                <td>{this.props.spec.ipa2}</td>
                {values.map((value, index) => values[index] === "0" ? <td className="grey"></td> : <td>{values[index]}</td>)}
            </tr>
        )
    }

}