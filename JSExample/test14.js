//Getter and Setter Example
class User {

    // constructor(name, age) {
    //     this._name = name;
    //     this._age = age;
    // }

    // Getter for Name
    get name() {
        return this._name;
    }

    // Setter for Name
    set name(newName) {
        this._name = newName;
    }

    // Getter for Age
    get age() {
        return this._age;
    }

    // Setter for Age
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Invalid age. Age must be positive.");
        }
    }
}

let user = new User();
user.name = "Jane"; //Setter
user.age = 25;   // Setter

console.log(user.name);// Getter
console.log(user.age);// Getter

user.age = 35; // Setter
console.log(user.age);// Getter

user.name = "Alice"; // Setter
console.log(user.name);// Getter
