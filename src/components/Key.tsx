import React from 'react'

type KeyParam = {
    keyVal: String,
    bigKey: Boolean,
}

export default function Key(_KeyParam: KeyParam) {
    return (
        // if bigKey is true, then id="big"
        <div className="key" id={_KeyParam.bigKey && "big"}>{_KeyParam.keyVal}</div>
    )
}
