let obj1 = {name:'Nicha'};
let obj2 = {...obj1};
obj2.name = 'Joe';
console.log(obj1);
console.log(obj2);

let animal = {eats:true,jumps:true,run:5};
let rabbit = {...animal, run:10,eats:false};
console.log(rabbit);
console.log(animal);
