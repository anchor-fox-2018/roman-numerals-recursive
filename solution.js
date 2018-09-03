function toRoman(input) {
    var yearList = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    result = '';
    if (input > 0) {
        for (let year in yearList) {
            if (input >= yearList[year]) {
                result += year;
                return result + toRoman(input -= yearList[year]);
            }
        }
    }
    else {
        return '';
    }
}

//test
console.log(toRoman(999))
console.log(toRoman(20))
console.log(toRoman(400))
console.log(toRoman(333))
console.log(toRoman(2121))
console.log(toRoman(999))
console.log(toRoman(000001))
console.log(toRoman(3000))

//result
console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('4 | IV | ', toRoman(4))
console.log('9 | IX | ', toRoman(9))
console.log('23 | XXIII | ', toRoman(23))
console.log('1453 | MCDLIII | ', toRoman(1453))
console.log('1646 | MDCXLVI | ', toRoman(1646))