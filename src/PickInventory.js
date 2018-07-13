import React from 'react';

export class PickInventory extends React.Component {
    
    state = {}

    render() {

        let basic_consonants = [];

        return(
            <div>
                <table id="consonants">
                    <thead>
                        <tr>
                            <th>CONSONANTS</th>
                            <th>bilabial</th>
                            <th>labiodental</th>
                            <th>dental</th>
                            <th>alveolar</th>
                            <th>postalveolar</th>
                            <th>retroflex</th>
                            <th>alveolo-palatal</th>
                            <th>palatal</th>
                            <th>fronted velar</th>
                            <th>velar</th>
                            <th>backed velar</th>
                            <th>uvular</th>
                            <th>pharyngeal</th>
                            <th>glottal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
                <table id="vowels">
                    <thead>

                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        )
    }
}