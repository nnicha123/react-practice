let arr = ["Ilya","Kantor"];
let [firstName,surname] = arr;
console.log(firstName);
console.log(surname);

let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');
console.log(user);

let newUser = {
    name: 'John',
    age:30
};
for(let [key,value] of Object.entries(newUser)){
    console.log(`${key}:${value}`);
}

let guest = "Jane";
let admin = "Pete";
[guest,admin] = [admin,guest];
console.log(`Guest : ${guest} Admin : ${admin}`);

let options = {
    title: "Menu",
    width: 100,
    height: 200
   };
   let {width, title, height} =
   options;
   console.log(title); // Menu
   console.log(width); // 100
   console.log(height); // 200