"use strict";
// console.log("before");
// wave();
// console.log("after");
// let user = {
//   fatherName: "Ramesh Chand",
//   "mother name": "Sanjog Devi",
//   "run fast slow": function () {
//     console.log("run fast");
//   },
//   walk() {
//     console.log("walking");
//   },
// };

// user.shakeHands = function () {
//   console.log("shaking hands");
// };

// function wave() {
//   console.log("waving hands");
// }

// user.wave = wave;

// user["run fast slow"]();
// user.walk();
// user.shakeHands();
// user.wave();

// let teachers = {
//   fatherName:"lalphool",
//   teach(){
//     console.log(`${this?.fatherName} will teach something`);
//   }
// }

// teachers.teach();

// let hod = teachers;
// teachers = null;
// hod.teach();

// let parents = {
//   name:"Ramesh Chand"
// }

// let child = {
//   name:"Vasu Sharma"
// }

// function wave(){
//   console.log(`${this.name} waving`);
//   console.log(`${this.wave}`)
// }

// parents.wave = wave;
// child.wave = wave;

// parents.wave();
// child.wave();

let user = {
  name: "Vasu",
  sayHi: () => {
    console.log(this);
  },
};

function wave() {
  console.log(`${this} is an object`);
}
wave();
{
  console.log(this , "is isside brackets")
}
user.sayHi();
