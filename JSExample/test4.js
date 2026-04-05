//Function example
function add(a = 10, b = 20) {
    return a + b;
}

console.log("Hello java scripts");

let sum = add();
console.log("Sum: " + sum);

// arrow function

// let add = (a, b) =>
//     console.log("Sum: " + add(1, 2));

showMe(); // a hoisting example

function showMe() {
    add(1, 2);
    console.log('an hoisting example');
}




