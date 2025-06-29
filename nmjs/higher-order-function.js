//HIGHER ORDER FUNTIONS ARE THOSE FUNTIONS IN WHICH WE PASSED THE FUNTION TO PERFORM SOME TASK 
//
//example

function calculate(arr, fn) {

  let result = [];

  for (item of arr) {

    result.push(fn(item));
  }
  return result;
}


function area(r) {

  return Math.PI * r * r;

}

function circumFrance(r) {

  return 2 * Math.PI * r;
}

const arr = [2, 3, 1, 4];

console.log(calculate(arr, area))
console.log(calculate(arr, circumFrance));
