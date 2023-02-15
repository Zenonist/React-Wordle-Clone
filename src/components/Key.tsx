import React, { useContext } from 'react'
import { AppContext } from '../App'

type KeyParam = {
    keyVal: String,
    bigKey: Boolean,
}

export default function Key(_KeyParam: KeyParam) {
    const { onSelectLetter, onDelete, onEnter} = useContext(AppContext);
    const selectLetter = () => {
        if (_KeyParam.keyVal === "ENTER") {
            onEnter();
        } else if (_KeyParam.keyVal === "DELETE") {
            onDelete();
        } else {
            onSelectLetter(_KeyParam.keyVal)
        }

    }

    return (
        // if bigKey is true, then id="big"
        <div className="key" id={_KeyParam.bigKey && "big"} onClick={selectLetter} >{_KeyParam.keyVal}</div>
    )
}
