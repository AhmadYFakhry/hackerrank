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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let after = (s.slice(s.length-2));
    let time = parseInt(s.slice(0, 2));
    if(after === 'PM' && time !== 12) {
        time+=12;
    }
    if(time === 12 && after == 'AM') {
        time = 0;
    }
    if(time < 12){
        time = `0${time}`
    }
    s = s.slice(2, s.length-2);
    return `${time}${s}`

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
