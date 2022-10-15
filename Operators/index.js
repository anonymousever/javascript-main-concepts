// Operators
// 1. Arithmetic operators
let x = 0;
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(x++);
console.log(++x);
console.log(x--);
console.log(--x);

// 2. Assignment operators
x = y;
console.log(x);
// Augmented assignment operators
x += y;
console.log(x);

// 3. Comparison operators
console.log(x === y);
console.log(x !== y);
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);

// 4. Logical operators (and, or, not)
let highIncome = true;
let goodCredit = true;
let premiumUser = true;
let isAcceptable = (highIncome && goodCredit) || premiumUser;
let isRefused = !isAcceptable;
console.log(isAcceptable);
console.log(isRefused);

// Logical operators with non-boolean values (truthy and falsy values)
console.log(true && 'JS');
console.log(true && 10);
console.log(true && 0);
console.log(true && '');
console.log(true && false);
console.log(true && undefined);
console.log(true && null);

// 5. Ternary operator
let score = 0;
let state = score >= 10 ? 'Win' : 'Lose';
console.log(state);
