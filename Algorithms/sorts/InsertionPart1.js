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

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    const ins = arr[n-1];
    let i = 0;
    for(i = n - 2; i >= 0; i--) {
        if(ins < arr[i])  {
            arr[i+1] = arr[i];
        }
        else if(ins > arr[i]) {
            arr[i+1] = ins;
            break;
        }
        console.log(...arr);
    }
    // Edge case where the element needs to be placed at the beginning 
    if(i === -1) {
        arr[0] = 1;
    }
    console.log(...arr);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
