let user = {
    name:"John",
    surname:"Smith",

    get fullName(){
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
      }
    
}
user.fullName = 'Joe Byden';
export default function User(){
    return(
        user.surname
    )
}
console.log(user.fullName);