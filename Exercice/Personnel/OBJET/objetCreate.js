

const person = {
  isHuman: false,
  age: 12,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}. I am ${this.age}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten


me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"


// Object.defineProperties(obj,pro)

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {
    value:1
  },
});

console.log(object1.property2);
// Expected output: 42

