// console.log(b);
// for (let i = 0; i < 4; i++) {
//   let c = 0;
//   var b = 3;
// }
//can access c becuasce c is blocked scope, where as b is funtion scoped 
//as we know variable declared by var keyword are funtion scoped and the variable declared by let and const keyword are block scoped 

//
// console.log(b);
// let a;
// console.log(a);
//

setTimeout(() => {
  console.log("setTimeout at line no 0 with 0 millisecond timer");
}, 0)
function something() {
  return new Promise((resolve, reject) => {
    console.log("promise before ");
    resolve("this is promise message");
    console.log("promise after");
  })
}


something().then((message) => {
  console.log("resolved&fulfilled ", message);
})

console.log("end of program");
