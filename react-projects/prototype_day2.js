let user = {
    name:'Nicha',
    age:24
}

let rabbit = Object.create(user);
console.log(Object.getPrototypeOf(rabbit) == user);
console.log(Object.getPrototypeOf(user));
Object.setPrototypeOf(rabbit, {jumps:true}); // เปลี่ยน prototype ของ rabbit เปน {}
console.log(Object.getPrototypeOf(rabbit));