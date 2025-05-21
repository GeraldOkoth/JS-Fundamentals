const { argv } = require("node:process");

const firstArg = argv[2];
const converted = Number(firstArg);

const factorial = (n) => {
  if (isNaN(n) || n < 0) return 1;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(converted));
