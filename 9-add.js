const { argv } = require("node:process");

const firstArg = argv[2];
const secondArg = argv[3];

function add(a, b) {
  return a + b;
}

if (firstArg && secondArg) {
  const firstArgConverted = Number(firstArg);
  const secondArgConverted = Number(secondArg);
  if (!isNaN(firstArgConverted) && !isNaN(secondArgConverted)) {
    console.log(add(firstArgConverted, secondArgConverted));
  }
} else {
  console.log("NaN");
}
