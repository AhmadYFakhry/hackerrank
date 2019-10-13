// Iterative
function extraLongFactorials(n) {
    let longInt = 1;
    let i = 1;
    while(i <= n) {
        longInt = i * longInt;
        i++;
    }
    return longInt;
}

// Recursive
function extraLongFactorials1(n) {
    if(n === 1) {
        return 1;
    }
    return n * extraLongFactorials(n - 1);
}

// Solutions done by importing bignumber 
// Iterative
function extraLongFactorial2(n) {
    let bn = require('bignumber.js');
    let result = new bn(1);
    for(let i = 1; i <= n; i++) {
        result = result.mul(i);
    }
    return(result.toFixed());
}
