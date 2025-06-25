// console.log(globalThis.a);
// console.log(globalThis === window);
// var a = 5;

// function something() {
//   console.log("before");
//   console.log(b);
//   var b = 3;
//   console.log("after");
//   console.log(b);
// }

// something();
console.log(x);
var x = "ram";
{
  console.log(x);
  {
    {
      console.log(x);
      var x = 3;
    }
    console.log(x);
  }
  var a = 3;
  let b = 5;
  const c = 8;
}

function doSomething() {
  console.log(x);
  var x = "ram";
  console.log(x);
}
doSomething();

console.log(x);
