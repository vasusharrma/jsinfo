// console.log("ram")
//
// let x = 13;
//
// setTimeout(() => {
//   console.log('middle');
//   console.log(this);
//   console.log(x);
//
// }, 0);
//
// document.querySelector('#clickme').addEventListener('click', () => {
//   console.log("x from event listenrer ", x);
//   console.log('addEventListener');
// })
// console.log("end");
//
//

console.log("kahana");

setTimeout(() => {
  console.log("setTimeout executed");
}, 0);

function getPromise() {
  return new Promise((resolve, reject) => {
    resolve(" promise executed");
  });
}

let i = 0;
while (i < 5000000000) {
  i++;
}
getPromise().then((data) => {
  console.log(data);
});

console.log("ram");
