// //var ,let const example

// const value = "Test"

// value = "Test"//global scope


// function test() {

//     var x = 10;  //local scope
//     let y = 20;  //local scope
//     const z = 30;  //local scope

//     console.log(value);

// }

// if (true) {
//     var value1 = "Hello";  //block scope
//     console.log(value);
// }


// console.log(value1);

//Hoisting example
console.log(x);  //undefined
var x = 5;
// console.log(x);  //5


greet();   // ✅ Works

function greet() {
    console.log("Hello");


}

var a = 10;
var a = 30;

let b = 10;
b = 30;

