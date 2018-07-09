import React from 'react';

export const ComparisonRow = (props) => (
    
props.spec.length === 1 ? (
    <tr>
        <td>{props.spec[0]}</td>
        <td>{props.spec[0]}</td>
    </tr>) : 
    (
    <tr className="diffSegment">
        <td>{props.spec[0]}</td>
        <td>{props.spec[1]}</td>
    </tr>
    )
   
)