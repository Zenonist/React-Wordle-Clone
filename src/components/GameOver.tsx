import React, { useContext } from 'react'
import { AppContext } from '../App';

export default function GameOver() {
    const { gameOver, setGameOver, correctWord, currAttempt} = useContext(AppContext);
    return (
        <div className='gameOver'>
            <h3>{gameOver.guessedWord ? "You correctly guessed": "You lose"}</h3>
            <h1>Correct: {correctWord}</h1>
            {gameOver.guessedWord && (<h3> You guessed in {currAttempt.attempt} attempts</h3>)}
        </div>
    )
}
