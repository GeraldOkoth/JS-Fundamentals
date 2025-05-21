const {argv} = require('node:process');
// argv[2] is the first argument passed to the script
console.log(argv[2]);
if (argv[2] === undefined) {
    console.log("No argument");
}