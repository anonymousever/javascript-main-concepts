// Arrays
// 1. Structure
const letters = ['b', 'c', 'd'];
console.log(letters);

// 2. Accesssing elements of arrays
console.log(letters[0]);
console.log(letters[1]);
console.log(letters[2]);

// 3. Adding elements to arrays
// To the beginning (unshift)
letters.unshift('a');
console.log(letters);

// To the middle (splice)
letters.splice(4, 0, 'e');
console.log(letters);

// To the end (push)
letters.push('f');
console.log(letters);

// 4. Removing elements from arrays
// From the beginning (shift)
letters.shift();
console.log(letters);

// From the middle (splice)
letters.splice(3, 1);
console.log(letters);

// From the end (pop)
letters.pop();
console.log(letters);

// 5. Emptying the arrays
// Method 1 (using the length property)
letters.length = 0;
console.log(letters);

// Method 2 (using the splice method)
letters.splice(0, letters.length);
console.log(letters);

// 6. Combining arrays
// Method 1 (using the concat method)
const numbersCollectionOne = [1, 2, 3];
const numbersCollectionTwo = [4, 5, 6];
const combined = numbersCollectionOne.concat(numbersCollectionTwo);
console.log(combined);

// Method 2 (using the spread operator)
const newCombined = [...numbersCollectionOne, ...numbersCollectionTwo];
console.log(newCombined);

// 7. Slicing arrays
const sliced = combined.slice(2, 4);
console.log(sliced);

// 8. Joining arrays
const joined = combined.join(',');
console.log(joined);

// 9. Splitting arrays
const topic = 'JavaScript';
const topics = topic.split(' ');
console.log(topics);
const urlSlug = topics.join('-');
console.log(urlSlug);

// 10. Testing arrays
// Method 1 (using the every method)
const allPositive = combined.every(value => {
  return value >= 0;
});

console.log(allPositive);

// Method 2 (using the some method)
const somePositive = combined.some(value => {
  return value >= 0;
});

console.log(somePositive);

// 11. Looping over arrays
// Method 1 (using the for...of loop)
for (let value of combined) {
  console.log(value);
}

// Method 2 (using the foreach method)
const values = combined.forEach(value => {
  return value;
});

console.log(values);

// 12. Filtering arrays
const filtered = combined.filter(value => {
  return value >= 3;
});

console.log(filtered);

// 13. Finding elements in arrays
// For primitive data types
// Method 1 (using the indexOf method)
console.log(combined.indexOf('1'));

// Method 2 (using the lastIndexOf method)
console.log(combined.lastIndexOf('1'));

// Method 3 (using the includes method)
console.log(combined.includes('1'));

// For reference data types
// Method 1 (using the find method)
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Joe Doe' },
];

const user = users.find(user => {
  return user.id === 1;
});

console.log(user);

// Method 2 (using the findIndex method)
const userIndex = users.findIndex(user => {
  return user.id === 1;
});

console.log(userIndex);

// 14. Sorting arrays
const sortedNames = users.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

console.log(sortedNames);

// 15. Mapping arrays
const mapped = combined.map(value => {
  const obj = { value: value };
  return obj;
});

console.log(mapped);

// 16. Reducing arrays
const reduced = combined.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(reduced);
