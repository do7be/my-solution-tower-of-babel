import * as math from './Math.js';

let arg1 = process.argv[2];
let arg2 = process.argv[3];
let PI   = math.PI;
let sqrt = math.sqrt(+arg1);
let square = math.square(+arg2);

console.log(PI);
console.log(sqrt);
console.log(square);