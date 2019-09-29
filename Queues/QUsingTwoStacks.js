class Stack {
    constructor() {
        this.items = [];
    }

    pop() {
        if(this.items.length > 0) return this.items.shift();
        return null
    }

    push(item) {
        this.items.push(item); 
    }
}

class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }
    enqueue(x) {
        // while stack is not empty, push everything from s1, to s2;
        while(this.s1.length !== 0) {
            this.s2.push(this.s1.pop());
        }
        // push x to s1
        this.s1.push(x);
        // transfer s2 back on to s1
        while(this.s2.length !== 0) {
            this.s1.push(this.s2.pop());
        }
    }
    dequeue(x) {
        // if the array is not empty, return the top of the stack (FIFO);
        if(this.s1.length > 0) return this.s1.pop();
    }
}