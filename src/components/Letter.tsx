import React, { useContext } from 'react'
import { AppContext } from '../App'

type LetterParam = {
    letterPos: number,
    attemptValue: number,
}

interface boarddefaultInterface {
    board: string[][];
}


export default function Letter(_LetterParam: LetterParam) {
    const { board, correctWords, currAttempt } = useContext(AppContext)
    const letter: String = board[_LetterParam.attemptValue][_LetterParam.letterPos];

    const correct = correctWords[_LetterParam.letterPos] === letter;
    const almost = !correct && letter !== "" && correctWords.includes(letter);
    // * Convert to string for changing boolean into string (Typescript)
    // * false is used to avoid showing the letter color when the attempt is not used
    const letterState = String(currAttempt.attempt > _LetterParam.attemptValue && (correct ? "correct" : almost ? "almost" : "error"));
    return (
        <div className='letter' id={letterState}>{letter}</div>
    )
}
