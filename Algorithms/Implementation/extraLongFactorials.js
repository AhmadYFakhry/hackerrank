'use strict';

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

// Recursive 
function extraLongFactorials(n) {
    if(n == 1) return BigInt(1);
    return BigInt(n) * extraLongFactorials(BigInt(n) - BigInt(1));
}
// Iterative
function extraLongFactorials1(n) {
    const bigN = BigInt(n);
    let result = BigInt(1); // 1n also acceptable
    for(let i = BigInt(0); i < n; i++) {
        result *= bigN - i;
    }
    return result;
}

function main() {
    const n = parseInt(readLine(), 10);

    console.log(extraLongFactorials(n).toString())
}
