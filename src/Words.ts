import wordBank from "./wordle-bank.txt";

// The board is a 2D array of letters
export const boardDefault: String[][] = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
]

export const generateWordSet = async () => {
    let wordSet;
    /*
    It returns a promise that resolves with the result of parsing the body text as JSON.
    */
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArr = result.split("\n");
            wordSet = new Set(wordArr);
        });
    return { wordSet };
}