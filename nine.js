let a = null
let b = 4;
let c = 3;
console.log((a ?? b) ?? c);

let user;
console.log(user ?? "Anonymous")
console.log(null ?? undefined ?? null ?? 2);
let marks = 0;

console.log(marks || 33);
console.log(marks ?? 33);
console.log(!!"0")
