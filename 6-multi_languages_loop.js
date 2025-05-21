// const {argv} = require('node:process');

const mytext = ["C is fun", "Python is cool", "JavaScript is amazing"];

// for (let i = 0; i < mytext.length; i++) {
//     console.log(mytext[i]);
// }

while (mytext.length > 0) {
    console.log(mytext[0]);
    mytext.shift();
}