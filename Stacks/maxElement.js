function processData(input) {
    const stack = [];
    const newInput = input.split('\n');
    let numQueries = parseInt(newInput.shift());
    let query;
    let max = 0;
    // For every unshift, store the max.
    let i = 0;
    while(numQueries > 0) {
        query = newInput.shift();
        // 1 x  -Push the element x into the stack.
        if(query[0] === '1') {
            const newVal = parseInt(query.slice(2));
            // Array.prototype.unshift() to push onto the stack
            stack.unshift(newVal);
            max = Math.max(max, newVal);
        }
        else if(query[0] === '2') {
            // Array.prototype.shift() to pop from the stack
            const delVal = stack.shift();
            if(delVal === max) {
                max = 0;
            }
        }
        else if(query[0] === '3') {
            max = 0;
            for(let i = 0; i < stack.length; i++) {
                max = Math.max(stack[i], max);
            }
            console.log(max);
        }
        numQueries -= 1;
    }
}