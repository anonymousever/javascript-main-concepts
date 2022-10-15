// Objects
// 1. Structure
const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

console.log(circle);

// 2. Accessing properties of objects
// Using dot notation
console.log(circle.radius);
circle.draw();

// Using brackets notation
console.log(circle['radius']);

// 3. Adding properties to objects
circle.location = {
  x: 1,
  y: 2,
};

console.log(circle);

// 4. Delete properties from objects
delete circle.location;
console.log(circle);

// 5. Enumerating properties of objects
for (let key in circle) {
  console.log(key, circle[key]);
}

// To access keys of objects, we can use the keys property
const keys = Object.keys(circle);
console.log(keys);

// 6. Cloning objects
// Method 1 (using the object assign method)
const anotherCircleOne = Object.assign({}, circle);
console.log(anotherCircleOne);

// Method 2 (using the spread operator)
const anotherCircleTwo = { ...circle };
console.log(anotherCircleTwo);

// 7. Objects destructuring
const { radius } = circle;
console.log(radius);

// 8. Factory functions
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    },
  };
}

const circleOne = createCircle(1);
console.log(circleOne);

// 9. Constructor functions
function Circle(radius) {
  console.log('this', this);
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const circleTwo = new Circle(1);
console.log(circleTwo);
console.log(Circle.constructor);

// 10. Private properties and methods
function CirclePrivate(radius) {
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimizedLocation = function (x, y) {
    return { x, y };
  };
  this.radius = radius;
  this.draw = function () {
    return computeOptimizedLocation(defaultLocation.x, defaultLocation.y);
  };
}

const circlePrivate = new CirclePrivate(1);
console.log(circlePrivate);
circlePrivate.draw();

// 11. Getters and setters
function NewCircle(radius) {
  let defaultLocation = { x: 0, y: 0 };
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error('Invalid location');
      }
      defaultLocation = value;
    },
  });
}

const newCircle = new NewCircle(1);
console.log(newCircle);
newCircle.defaultLocation = { x: 1, y: 2 };
console.log(newCircle);
