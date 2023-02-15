import React from 'react'
import Key from './Key';

function Keyboard() {
    const keys1: String[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2: String[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3: String[] = ["Z", "X", "C", "V", "B", "N", "M"];
    return (
        <div className='keybaord'>
            {/* First line */}
            <div className="line1">
                {/* show each key inside key1 list */}
                {keys1.map((key) => {
                    return <Key keyVal={key} bigKey={false}/>
                })}
            </div>
            {/* Second line */}
            <div className="line2">
                {/* show each key inside key2 list */}
                {keys2.map((key) => {
                    return <Key keyVal={key} bigKey={false}/>
                })}
            </div>
            {/* Third line */}
            <div className="line3">
                <Key keyVal="ENTER" bigKey={true}/>
                {/* show each key inside key3 list */}
                {keys3.map((key) => {
                    return <Key keyVal={key} bigKey={false}/>
                })}
                <Key keyVal="DELETE" bigKey={true}/>
            </div>
        </div>
    )
}

export default Keyboard