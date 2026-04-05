//Array in javascript

// arr.push(10);
// arr.push(11);
// console.log("Array: " + arr);
// arr.pop();
// console.log("Array after pop: " + arr);
// arr.unshift(5);
// console.log("Array after unshift: " + arr);
// arr.shift();
// console.log("Array after shift: " + arr);

// console.log("Array length: " + arr.length);

// console.log("Array includes 45: " + arr.includes(41));

// console.log("Index of 45: " + arr.indexOf(45));
// console.log("Array slice: " + arr.slice(1, 4));
// //arr.splice(2, 0, 50);
// console.log("Array after splice: " + arr);
// //  arr.splice(3, 1);
// //  console.log("Array after splice: " + arr);
// let newArr = arr.concat([100, 200]);
// console.log("New Array: " + newArr);
// let sortedArr = arr.sort((a, b) => a - b);
// console.log("Sorted Array: " + sortedArr);

// console.log("Reversed Array: " + arr.reverse());

// console.log("Array join: " + arr.join(", "));
// console.log("Array to String: " + arr);
// console.log("Array to String: " + typeof (arr.toString()));
let arr = [3, 6, 8, 45, 56];

// for (let i = 0; i < arr.length; i++) {
// console.log("Element at index " + i + ": " + arr[i]*2);
// }

//map, filter, reduce
let mappedArr = arr.map(x => x * 2);
console.log("Mapped Array: " + mappedArr);
let filteredArr = arr.filter(x => x > 10);
console.log("Filtered Array: " + filteredArr);
let reducedValue = arr.reduce((sum, val) => sum + val, 0);
console.log("Reduced Value: " + reducedValue);






