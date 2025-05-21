const { argv } = require("node:process");

const firstArg = argv[2];
const secondArg = argv[3];

if (firstArg && secondArg) {
  console.log(firstArg + " is " + secondArg);
}
else {
    console.log(firstArg + " is "+ secondArg);
}
