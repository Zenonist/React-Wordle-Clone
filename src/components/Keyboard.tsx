import React, { useCallback, useContext, useEffect} from 'react'
import { AppContext } from '../App'
import Key from './Key';

function Keyboard() {
    const keys1: String[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2: String[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3: String[] = ["Z", "X", "C", "V", "B", "N", "M"];
    const allkeys: String[] = [...keys1, ...keys2, ...keys3];

    const { onSelectLetter, onDelete, onEnter, currAttempt, disabledLetters} = useContext(AppContext);
    const handleKeyboard = useCallback( (event: { key: string | String; }) => {
        if (event.key === "Enter") {
            onEnter();
        } else if (event.key === "Backspace") {
            onDelete();
        } else {
            allkeys.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            });
        }
    }, [currAttempt]);
    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        }
    }, [handleKeyboard])

    return (
        <div className='keyboard'>
            {/* First line */}
            <div className="line1">
                {/* show each key inside key1 list */}
                {keys1.map((key) => {
                    return <Key keyVal={key} bigKey={false} disabled={disabledLetters.includes(key)}/>
                })}
            </div>
            {/* Second line */}
            <div className="line2">
                {/* show each key inside key2 list */}
                {keys2.map((key) => {
                    return <Key keyVal={key} bigKey={false} disabled={disabledLetters.includes(key)} />
                })}
            </div>
            {/* Third line */}
            <div className="line3">
                <Key keyVal="ENTER" bigKey={true}/>
                {/* show each key inside key3 list */}
                {keys3.map((key) => {
                    return <Key keyVal={key} bigKey={false} disabled={disabledLetters.includes(key)}/>
                })}
                <Key keyVal="DELETE" bigKey={true} />
            </div>
        </div>
    )
}

export default Keyboard