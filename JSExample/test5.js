// //String methods
// let str = "Hindi, English,Maths, Science, Marketing";

// console.log(str.length);

// console.log(str.toUpperCase());

// console.log(str.toLowerCase());

// console.log(str.includes("World"));

// console.log(str.indexOf("o"));

// console.log(str.slice(3, 5));

// console.log(str.replace("World", "JavaScript"));

// st = str.split(",");
// console.log(st[1]);

// console.log(str.trim());

// console.log(str.trimStart());

// console.log(str.trimEnd());

// console.log(str.charAt(3))

// console.log(str.concat(" is a subject"));

// console.log(str.startsWith("Hindi"));

// console.log(str.endsWith("Science"));

// console.log(str.search("H"));

// //Reverse a string

// let reversed = "pardeep";
// reversed = reversed.split("").reverse().join("");
// console.log("Reversed String: " + reversed);

// let reversedStr = "";
// for (let i = reversed.length - 1; i >= 0; i--) {
//     reversedStr += reversed.charAt(i);
// }
// console.log("Reversed String: " + reversedStr);

//LIst of string methods
// length
// toUpperCase()
// toLowerCase()
// includes()
// indexOf()
// slice()
// replace()
// split()
// trim()
// trimStart()
// trimEnd()
// charAt()
// concat()
// startsWith()
// endsWith()

//Input from user
// const prompt = require("prompt-sync")();
// let name = prompt("Enter your name: ");
// console.log("Hello " + name);
let st = "Hello World Hello JavaScript Hello World Hello JavaScript";
console.log(st.match(/Hello/g));
let result = st.matchAll(/World/g);

for (const match of result) {
    console.log(match);
}
