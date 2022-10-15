// Functions
// 1. Function declarations
function message() {
  console.log('Hi there');
}

message();

// 2. Function expressions
const newMessage = function () {
  console.log('Hi everyone');
};

newMessage();

// 3. Function parameters and arguments
function add(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(add(0, 1));

// 4. Default parameters
function interest(amount, rate = 0.05, years = 5) {
  return ((amount * rate) / 100) * years;
}

console.log(interest(1000));

// 5. Rest parameters
function totalCost(discount, ...prices) {
  let total = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return total - discount;
}

console.log(totalCost(10, 20, 30, 40, 50));

// 6. Scope
// Global scope: variables that are declared outside of functions or code blocks
// Local scope: variables that are declared inside of functions or code blocks

// 7. Hoisting
// The process of moving function declarations to the top of their scope
// Function declarations are hoisted but function expressions are not
