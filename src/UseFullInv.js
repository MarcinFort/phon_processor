import React from 'react';

export const UseFullInv = (props) => {
    return (<form>
        <label>
            <input type="radio" checked={!props.selection} onChange={props.toggleUseFullInv} />
            Use my inventory
        </label>
        <label>
            <input type="radio" checked={props.selection} onChange={props.toggleUseFullInv} />
            Use all sounds
        </label>
    </form>)
}