var x = 0;
doSomething();
somethingElse();
console.log(x);
function doSomething(){
  var x = 10;
  console.log(x);
}

function somethingElse(){
  var x= 20;
  console.log(x);
}

console.log(x);

function sayhi(){
  console.log("this is function " , this.x);
}
sayhi();