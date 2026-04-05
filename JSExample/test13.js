const { Test1 } = require("./test8.js");

class Test extends Test1 {

    constructor(FirstName, LastName) {

        super();
        this.name = FirstName;
        this.lastName = LastName;

        console.log(`Constructor of Test class with parameters: ${this.name} ${this.lastName}`);
    }

    display() {
        console.log("Displaying Test Page");
    }
}

//let t1 = new Test();
let t2 = new Test("Pardeep", "Sindhu");
