/* ------------ Part 1 ------*/
/* let common = "King Penguin";
let science = "Aptenodytes Patagonicus";
let id = 1;
let cuteLevel = 8.5;
let isCarnivore = true;
let x = null;
let y = undefined;
let z;

console.log(typeof x);
// null object points to null pointer return type bogus

console.log(`My name is ${science}, but you can call me ${common}`);
*/

/* --------------- Part 2 --------------*/
// let numbers = new Array(1,2,3,4,12);
// let animals = ["king penguin", "arctic fox", "heron", "burrowing frog"];
// let mix = new Array(3, 2.3, "dog", ["cat", 2]);

// console.log(numbers);
// console.log(`animals: ${animals}`);
// console.log(mix);

// mix = 2;
// console.log(`mix: ${mix}`);

/* -------------- Part 3 ------ */
// Object literals 
// let entity = {
//     commonName: "heron",
//     scientificName: "Ardeidae",
//     habitat: "wetland regions",
//     id: 2,
//     isCarnivore: false,
//     cutenessLevel: 5,
//     address: {
//         street: '1827 wetland blvd',
//         city: 'los angeles',
//         zipcode: 90057
//     }
// }
// console.log(entity.commonName.length);

// // to pull stuff out
// let { id } = entity;
// console.log(id);

// // add more stuff
// entity.email = "HeronIsCool@notTheFckingZoo.fuckHuman";
// console.log(entity.email);

// // Arrays of Object literals
// let todos = [
//     {
//         id: 1,
//         note: "meeting at the Lyon river bank",
//         isCompleted: true
//     },
//     {
//         id: 2,
//         note: "pick up the kids at kinder-safari Vericasrtle",
//         isCompleted: false
//     },
//     {
//         id: 3,
//         note: "dentist appt at Snail Service",
//         isCompleted: false
//     }
// ]

// console.log(todos)

/*--------Part 4------*/
/*
for (let i=0; i<=1; i++){
    console.log(i);
}

function Sum(value1, value2){
    return value1+value2;
}

let sum = (num1, num2) => num1 + num2;

console.log(sum(4,5));
*/

/* ---------- Part 5: DOM -------*/
// DOM
// 1:12:53
// https://youtu.be/hdI2bqOjy3c

//console.log(window);

// Single Element
// let form = document.getElementById("his-form");
// document.querySelector(".container");

document.querySelectorAll("h1");

let btn = document.querySelector('.btn');
// btn.style.background = 'red';
btn.addEventListener("click", (e) => {
    e.preventDefault();
    // document.querySelector("#his-form").style.background = "teal";
    document.querySelector("#his-form").classList.add("mainHeader");
    console.log(document.querySelector("#his-form"));
});