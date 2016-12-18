const converter = require('./converter');

const numberToConvert = ~~process.argv[2];

if (!numberToConvert || numberToConvert < 1) {
    console.log('Please specify the number which you want to convert. The number should be >= 1. The correct command invocation should looks like "node converter.js <numberToConvert>", e.g. "node converter.js 3333"');
    process.exit(0);
}

console.log(converter.romanNumeralConvertor(numberToConvert));