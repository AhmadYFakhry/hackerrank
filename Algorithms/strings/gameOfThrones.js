'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    // Create a map and a counter
    const letters = {};
    let counter = 0;
    // add each character to the map
    for(let i = 0; i < s.length; i++) {
        if(letters[s[i]]) {
            letters[s[i]] += 1;
        }
        else {
            letters[s[i]] = 1;
        }
    }
    for(let letter in letters) {
    // if there are more than one character % 2 !== 0 then its not an anagram
        if(letters[letter] % 2 !== 0) counter++;
        if(counter >= 2) return 'NO';
    }
    // else it is
    return 'YES';

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    ws.write(result + "\n");

    ws.end();
}
