// class User{
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log(this.name);
//     }
// }
// let user = new User('John');
// console.log(user);
// let user2 = new User('Nicha');
// console.log(user2);
// console.log(Object.getPrototypeOf(user));
// console.log(User.prototype.constructor);

// let User = class MyClass {
//     sayHi() {
//         console.log(MyClass);
//     }
// };
// let anotherUser = new User().sayHi();
// console.log(anotherUser);

// class User {
//     name = "Anonymous";
//     sayHi() {
//     console.log(`Hello, ${this.name}!`);
//     }
//    }

//    new User().sayHi();
//    console.log(new User().name);
//    console.log(User.prototype.sayHi()); // method อยูใน User.prototype
//    console.log(User.prototype.name); // property ไมอยูใน
// //    User.prototype;
//    let newUser = new User();
//    newUser.name = "NNN";
//    console.log(newUser.sayHi());


// class Button {
//     constructor(value) {
//     this.value = value;
//     }
//     click() {
//     console.log(this.value);
//     }
//    }
//    let button = new Button("hello");
//    console.log(button.click())
//    setTimeout(button.click, 1000); // undefined => because it needs a function so we declare as button.click instead of button.click() but it doesn't know what 'this' is if we do it that way 
//    so we do it in another way

class Button {
    constructor (value){
        this.value = value;
    }
    click(){
        console.log(this.value);
    }
}
let button = new Button('Hello');
setTimeout(() => button.click(), 1000); //sp we do this instead or another way below
