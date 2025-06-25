// function ram(name) {
//   function sayHi() {
//     return function (work) {
//       console.log(`${name} do  ${work}`);
//     }
//   }
//   return sayHi();
// }

// const someone = ram("nirman");

// someone("play")

function shriRam(name){
  function sita(){
    console.log("ala" , name);
  }

  return function(){
    console.log("ram");
    sita();
  }
}

let getSita = shriRam("jay");
console.log(getSita);
getSita();