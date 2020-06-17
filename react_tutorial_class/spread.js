// let str = "Hello";
// console.log([...str]);
// let [firstName,,title] = ["Julius","Caesar",'Consul','the Roman Republic'];
// console.log(firstName,title);

// function sumAll(...args){
//     let sum = 0;
//     console.log(args);
//     for(let arg of args) sum += arg;
//     return sum;
// }
// console.log(sumAll(1));
// console.log(sumAll(1,2));
// console.log(sumAll(1,2,3));

// function showName(){
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments[1]);

//     for(let arg of arguments) console.log(arg);
// }

// console.log(showName(23,2,5,7));

let arr = [3,5,1];
console.log(...arr);
console.log(Math.max(...arr))
let arr1 = [1,-2,3,4];
let arr2 = [8,3,-8,1];
console.log(...arr1,...arr2);
console.log(Math.max(...arr1,...arr2))
arr2 = [8,9,15];
let merged = [0,...arr,2,...arr2];
console.log(merged);
arr1.splice(2,0,...arr2);
console.log(arr1);