class Test1 {

    constructor() {
        console.log("Constructor of Test1 class");
    }

    demo() {
        this.name = "Test";
        this.age = 25;
        console.log("Demo function");
    }
    display() {
        console.log("Display function");
    }


}

// let name = "John";
// let age = 30;

// let t1 = new Test1();
// t1.demo();
// t1.display();
// console.log(t1.name);
// console.log(t1.age);
// console.log(name);
// console.log(age);

//export
module.exports = { Test1 };