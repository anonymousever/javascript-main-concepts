// Control Flow
// 1. Conditional statements
// if...else
let temperature = 0;
if (temperature < 0) {
  console.log('Freezing');
} else if (temperature >= 0 && temperature < 15) {
  console.log('Cold');
} else if (temperature >= 15 && temperature < 25) {
  console.log('Warm');
} else {
  console.log('Hot');
}

// switch...case
let role = 'Admin';
switch (role) {
  case 'Admin':
    console.log('Welcome Admin');
    break;
  case 'User':
    console.log('Welcome User');
    break;
  default:
    console.log('Welcome');
}

// 2. Loops
// for loop
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// for...in loop (iterating over objects)
let user = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  console.log(key, user[key]);
}

// for...of loop (iterating over arrays)
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}

// while loop
let i = 0;
while (i < 5) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// do...while loop
let j = 0;
do {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
} while (j < 5);
