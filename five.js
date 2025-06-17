let result = (1 + 4, 5 + 3);
console.log(result);
console.log('a' > 'A');
console.log('A' > 'a');
console.log('b' > 'A');
console.log('Ram' > 'rAm')

age = 41;

let message = (age < 3) ? "Hi Baby!" : (age < 18) ? "Hi Youngman" : (age < 50) ? "Hi Gentleman" : (age < 100) ? "Hi Oldman" : "What an unusal age";
console.log(message);
let a = 1;
let b = 2;
let res = (a < b) ? "below" : "above";
console.log(res);

let login = "";

let secretMessage = (login === "Employee") ? "Hello" : (login === "Director") ? "Greetings" : (login === '') ? "No login" : "";
console.log("SecretMessage:", secretMessage, "end")
