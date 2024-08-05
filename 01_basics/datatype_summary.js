// PRIMITIVE DATA TYPES
// 7 types
// 1-String,
// 2-Number,
// 3-Boolean,
// 4-null,
// 5-undefined,
// 6-Symbol,
// 7-BigInt


// symbol declare
const id = Symbol('123')
const anotherId =Symbol('123')










// REFERENCE TYPE (NON-PRIMITIVE) DATA TYPES
// 1-Array
// 2-Objects
// 3-Function

// Array declare
// const heros = ["Iron man", "Captain America", "Spiderman"];

// Object Declare
// let myObj = {
//     name: "Amir",
//     age: 23,
// }

// Function decalre
// const myFunction = function(){
//     console.log("Hello world");
// }















// *********************Stack and Heap Memory**************

// Stack-Use in primitive data types
// Heap-Use in non-primitive data type


let myYoutubename = "amiridrisidotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "almir@google.com"

console.log(userOne.email);
console.log(userTwo.email);






