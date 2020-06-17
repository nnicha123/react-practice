// class User{
//     static staticMethod(){
//         console.log(this === User);
//     }
// }
// User.staticMethod(); // cannot be used if we don't use static keyword
// // need to make new class first see below
// Static =? ใช้ class ได้เลย

class User {
    staticMethod(){
        console.log(this === User)
    }
}
let user = new User();
user.staticMethod(); //Normal way