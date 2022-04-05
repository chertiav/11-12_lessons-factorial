'use strict'
let num = 5;
const getFactorial = (x) => x < 1 ? 1 : x * getFactorial(x-1);
console.log(getFactorial(num));