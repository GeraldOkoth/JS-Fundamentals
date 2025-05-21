const {argv} = require('node:process');
const firstArg = argv[2];

const converted = Number(firstArg);

if (!isNaN(converted)) {
    for (let i = 0; i < converted; i++) {
        console.log("C is fun");
    }
}
else {
    console.log("Missing number of occurrences");
} 