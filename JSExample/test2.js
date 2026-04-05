//Operators in JavaScript

// Arithmetic Operators
// let a = 10;
// let b = 5;
// console.log("Addition: " + (a + b)); // 15
// console.log("Subtraction: " + (a - b)); // 5
// console.log("Multiplication: " + (a * b)); // 50
// console.log("Division: " + (a / b)); // 2
// console.log("Modulus: " + (a % b)); // 0
// console.log("Exponentiation: " + (a ** b)); // 100000000
// //Reverse a number 123
// let num = 123;
// let reversed = 0;
// while (num != 0) {
//     let digit = num % 10; // get the last digit 3
//     reversed = reversed * 10 + digit; // build the reversed number 0*10+3=3, 3*10+2=32, 32*10+1=321
//     num = Math.floor(num / 10); // remove the last digit 12,1,0
// }
// console.log("Reversed Number: " + reversed); // 321

// Comparison Operators
// let x = 10;
// let y = 20;
// console.log("Equal to: " + (x == y));
// console.log(" equal to: " + (x === y))
// console.log("Not equal to: " + (x != y));
// console.log("Greater than: " + (x > y));
// console.log("Less than: " + (x < y));
// console.log("Greater than or equal to: " + (x >= y));
// console.log("Less than or equal to: " + (x <= y));
// Logical Operators
// let p = false;
// let q = true;
// console.log("Logical AND: " + (p && q));
// console.log("Logical OR: " + (p || q));
// console.log("Logical NOT: " + (!p));
//unary Operators
let num = 5;
//num++;

console.log("Unary Plus: " + (++num));
console.log("Unary Minus: " + (num));

let a = 0
let b = 1
c = ++a + ++b + a++ + b++
console.log(a, b, c);

