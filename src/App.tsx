import { useState, createContext, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";

export const AppContext = createContext();

type currAttemptType = {
    attempt: number,
    letterPos: number,
}

function App() {
    // * set the state
    // update the board array
    const [board, setBoard] = useState(boardDefault)
    const [currAttempt, setCurrAttempt] = useState<currAttemptType>({ attempt: 0, letterPos: 0 })
    const [wordSet, setWordSet] = useState(new Set())

    const correctWord = "HELLO";

        useEffect(() => {
            generateWordSet().then((words) => {
                setWordSet(words.wordSet);
            })
        }, [])

    const onSelectLetter = (keyVal: string) => {
        // if letterPos is greater than 4, then return the end function
        if (currAttempt.letterPos > 4) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    }

    const onDelete = (keyVal: string) => {
        if (currAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
        setBoard(newBoard);
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
    }

    const onEnter = (keyVal: string) => {
        // * if letterPos is not 5, then return the end function (Let user insert the rest of the letters)
        if (currAttempt.letterPos !== 5) return;

        let currentWord = "";
        for (let i = 0; i < 5; i++) {
            currentWord += board[currAttempt.attempt][i];
        }
        // * check if the word is in the wordSet
        if (wordSet.has(currentWord.toLowerCase())) {
            setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
        } else {
            alert("Word not found");
        }
    }

    return (
        <div className="App">
            <nav>
                <h1>Wordle</h1>
            </nav>
            <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onEnter, onDelete, correctWord }}>
                {/* style: center all components*/}
                <div className="game">
                    <Board />
                    <Keyboard />
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default App;
