function createCounter() {
    let count = 0; // Лічильник

    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

// Створюємо лічильник
let counter = createCounter();

counter.increment(); // Збільшуємо на 1
counter.increment(); // Збільшуємо ще раз
console.log(counter.getCount()); // Виводить 2
