console.log(firstclass)
//function statement
a()
function a() {
  console.log("function statement");
}
a();

//function expression


var b = function () {
  console.log("function expression");
  console.log(b);
}

b();

//function declaration == function statement


//anonymous function => we use anonymous funtion there where we treat funtion as values 

var c = function () {
  console.log("function expression & anonymous function");
}

//named function expression

var d = function something() {
  console.log("named function expression");
}

//parameters & arguments

function doSomething(param1, param2) {
  console.log(param1 + param2);
}

const arg1 = 34;
const arg2 = 53;
doSomething(arg1, arg2);

//first class function
//function are first class citizen

function first(param) {
  console.log(param);
  return function () {
    console.log("returned first class function")
  }

}

var firstclass = first(function () {
  var a = 3
})

firstclass();


