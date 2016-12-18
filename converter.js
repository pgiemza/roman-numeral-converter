const romanMapping = {
    M: 1000, CM: 900, D: 500, CD: 400,
    C: 100, XC: 90, L: 50, XL: 40,
    X: 10, IX: 9, V: 5, IV: 4,
    I: 1
};

function romanNumeralConvertor(number) {
    return Object.keys(romanMapping).reduce((memo, sign) => {
        memo.result = memo.result + sign.repeat(memo.number / romanMapping[sign]);
        memo.number = memo.number % romanMapping[sign];
        return memo;
    }, {number, result: ''}).result;
}

module.exports = {romanNumeralConvertor};