import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./Words";

export const AppContext = createContext();


function App() {
    // update the board array
    const [board, setBoard] = useState(boardDefault)
    return (
        <div className="App">
            <nav>
                <h1>Wordle</h1>
            </nav>
            <p>test</p>
            <AppContext.Provider value={{board, setBoard}}>
                <Board />
                <Keyboard />
            </AppContext.Provider>
        </div>
    );
}

export default App;
