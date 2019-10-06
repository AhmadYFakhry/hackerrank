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

// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
    for(let i = 1; i < n; i++) {
        // if the element is smaller than the first element, move it to the beginning
        if(arr[0] > arr[i]) {
            arr.unshift(arr.splice(i, 1)[0]);
        }
        // If the element is smaller than the element before it, 
        else {
            for(let j = 1; j < i; j++) {
                if (arr[i] > arr[j-1] && arr[i] < arr[j]) {
                    arr.splice(j,0,arr.splice(i,1)[0]);
                }
            }
        }
        console.log(...arr);
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
