function equalStacks(h1, h2, h3) {
    /*
     * Write your code here.
     */
    let counter = 0;
    let potential = {};
    while(counter < h1.length) {
        let sum = h1.slice(counter).reduce((acc, e) => acc + e);
        counter++;
        if(potential[sum]) {
            potential[sum] += 1;
        }
        else {
            potential[sum] = 1;
        }
    }
    counter = 0;
    while(counter < h2.length) {
        let sum = h2.slice(counter).reduce((acc, e) => acc + e);
        counter++;
        if(potential[sum]) {
            potential[sum] += 1;
        }
        else {
            potential[sum] = 1;
        }
    }
    counter = 0;
    while(counter < h3.length) {
        let sum = h3.slice(counter).reduce((acc, e) => acc + e);
        counter++;
        if(potential[sum]) {
            potential[sum] += 1;
        }
        else {
            potential[sum] = 1;
        }
    }
    let max = 0
    for(let key in potential) {
        if(potential[key] === 3) {
            max = Math.max(key, max);
        }
    }
    return max;
}