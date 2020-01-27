// function identify() {
// 	return this.name.toUpperCase();
// }

// function speak() {
// 	var greeting = "Hello, I'm " + identify.call( this );
// 	console.log( greeting );
// }

// var me = {
//   name: "Kyle"
  
// };

// var you = {
// 	name: "Reader"
// };

// identify.call( me ); // KYLE
// identify.call( you ); // READER

// speak.call( me ); // Hello, I'm KYLE
// speak.call( you ); // Hello, I'm READER


// const x = function() {}
// console.log(Object.getPrototypeOf(x));

// const y = class{}
// console.log(Object.getPrototypeOf(y));


// // Initialize a constructor from a function
// const constructorFromFunction = new x();

// console.log(constructorFromFunction);


// const constructorFromClass = new y();

// console.log(constructorFromClass)


// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static distance(a, b) {
//     const dx = a.x;

//     return Math.hypot(dx);
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
// p1.distance; //undefined
// p2.distance; //undefined

// console.log(Point.distance(p1, p2)); // 7.0710678118654755

// class Stat {
//   constructor (name){
//     this.name = name
//   }

// check (hi){
//     return this.name + hi
//   }
// }

// var i = new Stat("priya")
// console.log(i)

// console.log(i.check("bye"))


// class Animal { 
//   speak() {
//     return this;
//   }
//   static eat() {
//     return this;
//   }
// }

// let obj = new Animal();
// obj.speak(); // Animal {}
// var speak2 = speak();
// console.log(obj.speak2()); // undefined


class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
