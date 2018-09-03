/**
 * Creates an instance of toRoman.
 *
 * @author: simplyeazy
 * @this {toRoman}
 * @param {number} integer Arabic number that wants to be converted into Roman numeral
 */
function toRoman(integer) {
    if (integer <= 0) { // base case
        return '';
    }
    if (integer > 0 && integer < 3000) {
        let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        for (let i = 0; i < decimal.length; i++) {
            // while (integer % decimal[i] < integer) {
            //     romawi = romawi + roman[i];
            //     integer = integer - decimal[i];
            // }
            if (integer >= decimal[i]) {
                let sisa = integer - decimal[i];
                integer = integer - decimal[i];
                return roman[i] + toRoman(sisa);
            }
        }
    }
    return "Dude too large, pick something between 0 and 2999"
}
console.log("4    | IV     ", toRoman(4))
console.log("9    | IX     ", toRoman(9))
console.log("23   | XXIII  ", toRoman(23))
console.log("1453 | MCDLIII", toRoman(1453))
console.log("1646 | MDCXLVI", toRoman(1646)) 