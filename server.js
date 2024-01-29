const path = require("path");
const { add, sub, mul, div, mod } = require("./math");

console.log(__dirname);
console.log(__filename);
console.log(path.parse(__filename));
console.log("---------------------------");
console.log(add(3, 3));
console.log(sub(4, 3));
console.log(mul(3, 3));
console.log(div(3, 3));
console.log(mod(3, 3));
