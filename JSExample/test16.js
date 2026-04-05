class Test16 {
    #age;
    name;

    Demo() {
        this.name = "Pardeep";
        this.#age = 35;
    }
    display() {
        console.log(this.name);
        console.log(this.age);
    }

}
//Export

let t2 = new Test16(); //undefined
t2.Demo();
t2.display(); //undefined
module.exports = { Test16 };    