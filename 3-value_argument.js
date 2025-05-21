const {argv} = require('node:process');
// argv[2] is the first argument passed to the script
const args = argv[2];
if (args === undefined) {
    // If no argument is passed, print "No argument"
    console.log("No argument");
} else {
    console.log(args);
}