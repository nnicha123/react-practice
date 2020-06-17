// let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };
//   console.log(rabbit.eats);
//   rabbit.__proto__ = animal;
//   console.log(rabbit.jumps);
//   console.log(rabbit.eats);

//   let animal = {
//     eats: true,
//     walk() {
//       console.log("Animal walk");
//     }
//   };

//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };

//   let longEar = {
//     earLength: 10,
//     __proto__: rabbit
//   };

//   // walk เอามาจาก prototype chain
//   longEar.walk(); // Animal walk
//   console.log(longEar.jumps); // true (จาก rabbit)

// let animal = {
//     eats: true,
//     walk() {
//       /* method นี้จะไม่ถูกใช้โดย rabbit */
//     }
//   };

//   let rabbit = {
//     __proto__: animal
//   };

//   rabbit.walk = function() {
//     console.log("Rabbit! Bounce-bounce!");
//   };

//   rabbit.walk(); // Rabbit! Bounce-bounce!

// let head = {
//     glasses: 1
// };
// let table = {
//     pen: 3,
//     __proto__: head
// };
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };
// let pockets = {
//     money: 2000,
//     __proto__: bed
//   };
  
// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach.push(food);
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster
//   };
  
//   let lazy = {
//       stomach: [],
//     __proto__: hamster
//   };
//   // This one found the food
// speedy.eat("apple");
// console.log( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// console.log( lazy.stomach ); // apple

// let animal = {
//     eats: true
//   };
  
//   function Rabbit(name) {
//     this.name = name;
//   }
//   let rabbit = new Rabbit("Brown Rabbit");
//   console.log(rabbit.eats);
//   Rabbit.prototype = animal;
  
//   let rabbit2 = new Rabbit("White Rabbit"); 
//   //  rabbit.__proto__ == animal
  
//   console.log( rabbit2.eats ); // true

// function Rabbit() {}
// // by default:
// // Rabbit.prototype = { constructor: Rabbit }
// console.log( Rabbit.prototype.constructor == Rabbit ); // true

// function Rabbit() {}
// Rabbit.prototype = {
//   jumps: true
// };
// let rabbit = new Rabbit();
// console.log(rabbit.constructor === Rabbit); // false

// function Rabbit() {}
// // ไม่ได้ overwrite Rabbit.prototype
// // แค่เพิ่มเข้าไป
// Rabbit.prototype.jumps = true
// let rabbit = new Rabbit();
// console.log(rabbit.constructor === Rabbit);
// // default Rabbit.prototype.constructor ยังอยู่

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// // Rabbit.prototype = {};
// console.log( rabbit.eats ); // ?
// console.log(rabbit.constructor == Rabbit);
// Rabbit.prototype.eats = false;
// console.log(rabbit.eats);

// let animal = {
//     eats:true
// };
// function Rabbit(name){
//     this.name = name
// }
// let unmodifiedRabbit = new Rabbit("Brown Rabbit");
// console.log(Rabbit.prototype);
// console.log(unmodifiedRabbit.constructor == Rabbit);

// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit")
// console.log(Rabbit.prototype);
// console.log(rabbit.constructor == Rabbit);

// Rabbit.prototype = {};
// console.log(Rabbit.prototype);
// console.log(rabbit.constructor == Rabbit);

// function Rabbit(){}
// Rabbit.prototype = {
//     eats:true
// };
// let rabbit = new Rabbit;
// console.log(rabbit.eats);
// Rabbit.prototype.eats = false;
// console.log(rabbit.eats);\


// let house = {home:true}
// let animal = {eats:true}
// function Rabbit(name){
//     this.name = name
// }
// Rabbit.prototype = animal;
// let rabbit2 = new Rabbit("Brown Rabbit")
// console.log(rabbit2.__proto__ == animal)
// Rabbit.prototype.jumps = true;
// let rabbit = new Rabbit("White Rabbit");
// console.log(animal) //animal prototype also changes
// console.log(rabbit.__proto__ == house)

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();
// delete rabbit.eats;
// console.log( rabbit.eats ); //will still be true delete does not delete the property
// console.log(rabbit) //it's not in there from the start

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// console.log(Rabbit.prototype)
// delete Rabbit.prototype.eats;
// console.log(Rabbit.prototype)
// console.log( rabbit.eats ); // ?


// function obj() {}
// let obj2 = new obj.constructor();

let obj = {};
console.log(obj)