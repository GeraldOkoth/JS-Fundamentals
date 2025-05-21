const {argv} = require('node:process');

const sizeOfSquare = argv[2];
const sizeOfSquareConverted = Number(sizeOfSquare);

if (!isNaN(sizeOfSquareConverted)) {
    if (sizeOfSquareConverted > 0) {
        for (let i = 0; i < sizeOfSquareConverted; i++) {
            let square = '';
            for (let j = 0; j < sizeOfSquareConverted; j++) {
                square += 'X';
            }
            console.log(square);
        }
    }
} else {
    console.log('Missing size');
}