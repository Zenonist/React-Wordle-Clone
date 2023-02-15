import { useState, createContext } from "react";
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
            <AppContext.Provider value={{board, setBoard}}>
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
