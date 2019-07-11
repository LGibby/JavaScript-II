// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
    var increment = 0;
    let countUp = () => {increment += 1};
    return counter;
};

const cookies = counter();
cookies();
cookies();
cookies();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    let increment = () => {
        var counter = 0;
        return increment = () => {counter += 2; return counter};
    };
    // `decrement` should decrement the counter variable and return it.
    let decrement = () => {
        var counter = 0;
        return decrement = () => {counter -= 1; return counter};
    };
    return counterFactory;
};
