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

// Complete the quickSort function below.
function quickSort(arr) {
    let pivot = arr[0];
    const [less, greater, equal] = [[], [], []];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > pivot) {
            greater.push(arr[i]);
        }
        else if(arr[i] < pivot) {
            less.push(arr[i]);
        }
        else if(arr[i] === pivot) {
            equal.push(arr[i]);
        }
    }
    let part = [...less, ...equal, ...greater]
    console.log(part);
    return part;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = quickSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
