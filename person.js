// All stuffs are Node modules (class, functions, etc)

/*

const person = {
    name: "John Doe",
    age: 36

}; 
module.exports = person;
*/

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }


    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

// Module Wrapper Funtion
/*
(function (exports, require, module, __filename, __dirname){
    // have access to export, require, module, filename, and dirname
});

*/

console.log(__filename);

module.exports = Person;

