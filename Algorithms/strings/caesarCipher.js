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

// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    let cipher = [];
    for(let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        if(s[i].match(/[A-Z]/g))cipher.push(String.fromCharCode(((charCode - 65 + k) % 26) + 65));
        else if(s[i].match(/[a-z]/g )) cipher.push(String.fromCharCode(((charCode - 97 + k) % 26) + 97));       
        else cipher.push(s[i]);
    }
    return cipher.join('');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const k = parseInt(readLine(), 10);

    let result = caesarCipher(s, k);

    ws.write(result + "\n");

    ws.end();
}
