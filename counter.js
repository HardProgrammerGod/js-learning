function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        },
        reset: function() {
            count = 0;
        }
    };
}

let counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Виведе: 2
counter.reset();
console.log(counter.getCount()); // Виведе: 0
