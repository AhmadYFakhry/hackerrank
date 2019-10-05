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

// Complete the plusMinus function below.
function plusMinus(arr) {
    const denom = arr.length;
    let [gT, lT, zero] = [0, 0, 0]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            gT++;
        }
        else if(arr[i] < 0) {
            lT++;
        }
        else if(arr[i] === 0){
            zero++;
        }
    }
    console.log(`${(gT/denom).toFixed(6)}`);
    console.log(`${(lT/denom).toFixed(6)}`);
    console.log(`${(zero/denom).toFixed(6)}`);

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
