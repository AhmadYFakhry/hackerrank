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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the twoStacks function below.
 */
function twoStacks(x, a, b) {
    let lenA = 0, lenB = 0, sum = 0;
    while(lenA < a.length && sum + a[lenA] <= x) {
        sum += a[lenA];
        lenA++;
    }
    let maxScore = lenA;
    while(lenB < b.length) {
        sum += b[lenB];
        lenB++;
        while(sum > x && lenA > 0) {
            lenA--;
            sum -= a[lenA];
        }
        if(sum > x) break;
        maxScore = Math.max(maxScore, lenA + lenB);
    }
    return maxScore;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const nmx = readLine().split(' ');

        const n = parseInt(nmx[0], 10);

        const m = parseInt(nmx[1], 10);

        const x = parseInt(nmx[2], 10);

        const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

        const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

        let result = twoStacks(x, a, b);

        ws.write(result + "\n");
    }

    ws.end();
}
