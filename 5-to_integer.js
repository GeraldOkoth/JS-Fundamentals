const {argv} = require('node:process');
const firstArg = argv[2];

const converted = Number(firstArg);

if (!isNaN(converted)) {
    console.log("My number: " + converted);
}
else {
    console.log("Not a number");
}