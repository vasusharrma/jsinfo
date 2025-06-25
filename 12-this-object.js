"use strict"
const admin = {
  name: "Admin",
  age: 22
};

const user = {
  name: "User",
  age: 18
}
//
//
// function tellAge() {
//   console.log(this.age);
// }
//
// user.tellAge = tellAge;
// admin.tellAge = tellAge;
//
// admin.tellAge();
// user.tellAge();
// function sayHi() {
//   console.log(this);
// }
// sayHi();
//
//

const Animal =
{
  nickName: "Tiger",
  age: 8,
  makeSound() {
    let insider = () => {
      let deepInsider = () => {
        console.log(this.nickName);
      }
      deepInsider();
    }
    insider()
  }
}

Animal.makeSound();
