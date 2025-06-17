let a = !!5;
console.log(a);

let age = 53;

if (age <= 25 || age >= 70) {
  console.log("valid");
}
else {
  console.log("invalid");
}


if (null && 0 || -1) {
  console.log(3);
}

if (null || 0) {
  console.log(2)
}

let somethingUnexpected = null && 3 || 6 && 8 && 84 || undefined;
console.log(somethingUnexpected);
