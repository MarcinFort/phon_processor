import React from 'react';
import { PickInventoryTableData } from './PickInventoryTableData';

export class PickInventory extends React.Component {

    render() {

        let basic_consonants = [["plosive","p","","","t","","ʈ","","c","k","q","","ʔ"],["","b","","","d","","ɖ","","ɟ","ɡ","ɢ","",""],["affricate","p͡ɸ","p͡f","t̪͡θ","t͡s","t͡ʃ","ʈ͡ʂ","t͡ɕ","c͡ç","k͡x","q͡χ","",""],["","b͡β","b͡v","d̪͡ð","d͡z","d͡ʒ","ɖ͡ʐ","d͡ʑ","ɟ͡ʝ","ɡ͡ɣ","ɢ͡ʁ","",""],["lateral affricate","","","t̪͡ɬ̪","t͡ɬ","t͡ɬ̲","","","","","","",""],["","","","d̪͡ɮ̪","d͡ɮ","d̠͡ɮ̠","","","","","","",""],["fricative","ɸ","f","θ","s","ʃ","ʂ","ɕ","ç","x","χ","ħ","h"],["","β","v","ð","z","ʒ","ʐ","ʑ","ʝ","ɣ","ʁ","ʕ","ɦ"],["lateral fricative","","","","ɬ","","","","","","","",""],["","","","","ɮ","","","","","","","",""],["nasal","m","ɱ","","n","","ɳ","","ɲ","ŋ","ɴ","",""],["trill ","ʙ","","","r","","ʀ","","","","ʀ","",""],["flap/tap","","","","ɾ","","ɽ","","","","","",""],["lateral flap","","","","ɺ","","","","","","","",""],["approximant","","ʋ","","ɹ","","ɻ","","j","ɰ","","",""],["lateral approximant","","","","l","","ɭ","","ʎ","ʟ","","",""]];
        let other_consonants = [["dark l","ɫ"],["S + x ","ɧ"],["strident dental affricate","t̪͡s̪"],["","d̪͡z̪"],["labio-palatal approximant","ɥ"],["labio-velar approximant","ʍ"],["","w"],["labio-velar stop","k͡p"],["","ɡ͡b"],["labio-alveolar stop","p͡t"],["","b͡d"]];
        let vowels = [["close ","i","y","ɨ","ʉ","ɯ","u"],["close-mid ","ɪ","ʏ","","","","ʊ"],["mid   ","e","ø","ɘ","ɵ","ɤ","o"],["open-mid ","ɛ","œ","ə","ɞ","ʌ","ɔ"],["open  ","ӕ","ɶ","a","","ɑ","ɒ"]]

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
                            <th>velar</th>
                            <th>uvular</th>
                            <th>pharyngeal</th>
                            <th>glottal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basic_consonants.map(x => <tr>{x.map(y => <PickInventoryTableData ipa={y} toggleSegmentSelection={this.props.toggleSegmentSelection} selected={this.props.inventory.includes(y)}/>)}</tr>)}
                    </tbody>
                    <thead>
                        <tr>
                            <th>OTHER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {other_consonants.map(x => <tr>{x.map(y => <PickInventoryTableData ipa={y} toggleSegmentSelection={this.props.toggleSegmentSelection} selected={this.props.inventory.includes(y)}/>)}</tr>)}
                    </tbody>
                </table>
                <table id="vowels">
                    <thead>
                        <th>VOWELS</th>
                        <th>front unrounded</th>
                        <th>front rounded</th>
                        <th>central unrounded</th>
                        <th>central rounded</th>
                        <th>back unrounded</th>
                        <th>back rounded</th>
                    </thead>
                    <tbody>
                        {vowels.map(x => <tr>{x.map(y => <PickInventoryTableData ipa={y} toggleSegmentSelection={this.props.toggleSegmentSelection} selected={this.props.inventory.includes(y)}/>)}</tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}