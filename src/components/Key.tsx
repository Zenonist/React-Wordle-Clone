import React, { useContext } from 'react'
import { AppContext } from '../App'

type KeyParam = {
    keyVal: String,
    bigKey: Boolean,
    disabled: Boolean,
}

export default function Key(_KeyParam: KeyParam) {
    const { onSelectLetter, onDelete, onEnter, onGiveUp} = useContext(AppContext);
    const selectLetter = () => {
        if (_KeyParam.keyVal === "ENTER") {
            onEnter();
        } else if (_KeyParam.keyVal === "DELETE") {
            onDelete();
        } else if (_KeyParam.keyVal === "GIVE UP") {
            onGiveUp();
        } else {
            onSelectLetter(_KeyParam.keyVal)
        }

    }

    return (
        // if bigKey is true, then id="big"
        <div className="key" id={_KeyParam.bigKey ? "big": _KeyParam.disabled && "disabled"} onClick={selectLetter} >{_KeyParam.keyVal}</div>
    )
}
