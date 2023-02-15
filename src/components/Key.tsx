import React, { useContext } from 'react'
import { AppContext } from '../App'

type KeyParam = {
    keyVal: String,
    bigKey: Boolean,
}

export default function Key(_KeyParam: KeyParam) {
    const { board, setBoard, currAttempt, setCurrAttempt } = useContext(AppContext);
    const selectLetter = () => {
        if (_KeyParam.keyVal === "ENTER") {
            // * if letterPos is not 5, then return the end function (Let user insert the rest of the letters)
            if (currAttempt.letterPos !== 5) return;
            setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0});
        } else if (_KeyParam.keyVal === "DELETE") {
            if (currAttempt.letterPos === 0) return;
            const newBoard = [...board];
            newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
            setBoard(newBoard);
            setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
        } else {
            console.log(currAttempt.letterPos);
            // if letterPos is greater than 4, then return the end function
            if (currAttempt.letterPos > 4) return;
            const newBoard = [...board];
            newBoard[currAttempt.attempt][currAttempt.letterPos] = _KeyParam.keyVal;
            setBoard(newBoard);
            setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
        }

    }

    return (
        // if bigKey is true, then id="big"
        <div className="key" id={_KeyParam.bigKey && "big"} onClick={selectLetter} >{_KeyParam.keyVal}</div>
    )
}
