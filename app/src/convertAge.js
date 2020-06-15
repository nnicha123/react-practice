let obj = {
    birth:1995,
    get age(){
        return `Age is ${2020 - this.birth}`
    },
    set age(age){
        this.birth = (2020 - age)
    }
};

console.log(obj.age);
obj.age = 30;
console.log(obj.birth);

