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

// Complete the gemstones function below.
function gemstones(arr) {
    // Create a map and counter
    let minerals = {};
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
    // Get rid of duplicates
        let dist = [...new Set(arr[i])];
        for(let ind = 0; ind < dist.length; ind++) {
            // add each gem
            if(minerals[dist[ind]]) minerals[dist[ind]] += 1
            else  minerals[dist[ind]] = 1
            
        }
    }
    // if a mineral has arr.length occurences (in every mineral) then its a gemstone.
    for(let mineral in minerals) {
        if(minerals[mineral] === arr.length) counter++;
    }
    // return counter
    return counter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    let result = gemstones(arr);

    ws.write(result + "\n");

    ws.end();
}
