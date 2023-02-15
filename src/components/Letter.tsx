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
    const { board } = useContext(AppContext)
    const letter: String[][] = board[_LetterParam.attemptValue][_LetterParam.letterPos];
    return (
        <div className='letter'>{letter}</div>
    )
}
