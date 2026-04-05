//Object example
let person = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        zip: "10001"
    },
    contact: [

        {
            type: "email",

        },
        {
            type: "phone",
            number: "123-456-7890"
        }
    ],
    greet: function () {
        console.log('Hello, World!')
    }
};

console.log(person.contact[1].type);

console.log(Object.fromEntries([["name", "John"], ["age", 30], ["city", "New York"]]));

// console.log("Name: " + person.name);

// console.log("Age: " + person.age);

// console.log("City: " + person.city);

// console.log("Keys: " + Object.keys(person));

// console.log("Values: " + Object.values(person));

// person.greet();

// console.log("Entries: " + Object.entries(person));

// console.log("Has name: " + person.hasOwnProperty("name"));

// console.log("Has country: " + person.hasOwnProperty("country"));

// console.log("Delete city: " + delete person.city);

// console.log("City after deletion: " + person.city);

// person.country = "USA";

// person["country"] = "India";

// console.log("Country: " + person.country);

// console.log("Entries: " + Object.entries(person));


// console.log("Address: " + person.address.street + ", " + person.address.zip);




