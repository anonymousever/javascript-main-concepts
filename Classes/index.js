// Classes
// 1. Structure
class Circle {
  constructor(radius) {
    // Instance members
    this.radius = radius;
  }
  // Instance members
  draw() {
    console.log('draw');
  }
  // Static members
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = new Circle(1);
console.log(circle);
console.log(typeof circle);

const newCircle = Circle.parse('{"radius": 1}');
console.log(newCircle);

// 2. Private members with Symbol
const _radius = Symbol('radius');
const _draw = Symbol('draw');
class CircleTwo {
  constructor(radius) {
    this[_radius] = radius;
  }
  [_draw]() {
    console.log('draw');
  }
  // Getter and setter
  get radius() {
    return this[_radius];
  }
  set radius(value) {
    if (value < 0) {
      throw new Error('Radius cannot be negative');
    }
    this[_radius] = value;
  }
}

const circleTwo = new CircleTwo(1);
console.log(circleTwo);
console.log(circleTwo.radius);
circleTwo.radius = 5;
console.log(circleTwo.radius);

// 3. Private members with WeakMap
const _radiusTwo = new WeakMap();
const _move = new WeakMap();
class CircleThree {
  constructor(radius) {
    _radiusTwo.set(this, radius);
    _move.set(this, () => {
      console.log('move', this);
    });
  }
  draw() {
    _radiusTwo.get(this);
    _move.get(this)();
    console.log('draw');
  }
}

const circleThree = new CircleThree(1);
console.log(circleThree);
circleThree.draw();

// 4. Inheritance
class Shape {
  constructor(size) {
    this.size = size;
  }
  draw() {
    console.log('draw');
  }
}

class CircleFour extends Shape {
  constructor(radius) {
    super(radius);
  }
  // Method overriding
  draw() {
    super.draw();
    console.log('draw circle');
  }
}

const circleFour = new CircleFour(1);
console.log(circleFour);
circleFour.draw();
