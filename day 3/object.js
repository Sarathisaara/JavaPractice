document.write("lion always as a loin");

//! creation
//&literals
// let names = "Saara";
// let person = {
//   name: "Sarathi",
//   rollno: 116,
//   age: 21,
//   skills: ["html", "css", "c++", "c", "java", "python", "sql"],
//   birthday: function (date, place) {
//     console.log(
//       `you all are invited to ${person.name} birthday on ${date} at ${place} and dont forget to bring the gifts`
//     );
//   },
// };
// console.log(person);

// //& accessing from the object

// //1.Bracket notation :
// console.log(person["names"]);
// console.log(person["rollno"]);

// //2.dot notation:
// console.log(person.birthday("22/03/2002", "Singipuram"));

// person.degree
// //2. object constructor
// let obj = new Object();
// obj.age = 21;
// obj.stream = "cse";
// console.log(obj);
// console.log(obj["age"]);

//3.Function constructor
var name1 = "Saarathi";
var age1 = 20;
let person = {
  name1: "Saara",
  age1: 21,
  detail: () => {
    console.log(`Name is ${this.name1} age is ${this.age1}`);
  },
  details: function () {
    console.log(`Name is ${this.name1} age is ${this.age1}`);
  },
};
person.detail();
person.details();

// class Person {
//   constructor(name, age) {
//     this.age = age;
//       this.name = name;

//      this.detail = function () {
//     //   console.log(`Name is ${name},age is ${age}`);
//     };
//   }
// }
// let p1 = new Person("Saara", 21);
// let p2 = new Person("Ravikumar", 21);
// console.log(p1);
// console.log(p2);
// p1.detail();
// p2.detail();

//4.using by class

function Snacks(name, qty) {
  this.name = name;
  this.qty = qty;
}
let s1 = new Snacks("Biscuits", 20);
console.log(s1);

class Snacks {
  constructor(name, qty) {}
}
