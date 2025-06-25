"use strict";
console.log("user`j", user?.sound);
console.log(a);
var a = 33;

var user = {
  name: "Jasprit",
  age: 33,
  sound:function() {
    console.log("this is ", this);
    console.log(`${this?.name} is making sound from user`);
  },
};


user.sound();
