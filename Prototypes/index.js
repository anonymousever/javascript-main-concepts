// Prototypes
// 1. Definition
// Prototypes are parent objects that are used to create child objects
// Each object has a prototype property that points to another object except for the root object

// 2. Inheritance
// Inheritance is the process of creating a new object from an existing object

// 3. Property descriptors
// Property descriptors or property attributes are objects that describe the properties of an object
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const circle = new Circle(1);
console.log(circle);

const objectBase = Object.getPrototypeOf(circle);
console.log(objectBase);
const objectDescriptor = Object.getOwnPropertyDescriptor(objectBase, 'draw');
console.log(objectDescriptor);

Object.defineProperty(circle, 'location', {
  value: {
    x: 1,
    y: 1,
  },
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(circle);

// 4. Constructor prototypes
console.log(Circle.prototype);

// 5. Instance members and prototype members
// Instance members are properties that are unique to each instance of a constructor, like the radius property and draw method
console.log(Object.keys(circle));
console.log(circle.hasOwnProperty('radius'));
console.log(circle.hasOwnProperty('draw'));

// Prototype members are properties that are shared among all instances of a constructor, like:
Circle.prototype.move = function () {
  console.log('move');
};

console.log(circle.move());
console.log(circle.hasOwnProperty('move'));

// 6. Custom prototypical inheritance
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Square(size) {
  // Calling the constructor of superclass
  Shape.call(this);
  this.size = size;
}

Square.prototype = Object.create(Shape.prototype);
// Resetting the constructor property of the prototype to the Square constructor
Square.prototype.constructor = Square;

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const shape = new Shape();
const square = new Square(1);
console.log(square);
console.log(shape);
console.log(square.duplicate());

// 7. Intermediate function inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

extend(Square, Shape);
const newSquare = new Square(1);
console.log(newSquare);

// 8. Polymorphism
// Polymorphism is the ability of an object to take on many forms
// The most general form of polymorphism is when an object takes on the forms of other objects
// The most specific form of polymorphism is when an object takes on the form of itself
const shapes = [new Circle(), new Square()];
for (let shape of shapes) {
  shape.duplicate();
}
