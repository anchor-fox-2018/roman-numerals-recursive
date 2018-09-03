function toRoman(num) {
  var angka = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'XM', 'M'];

  if (num < 0 || num > 3000) {
    return '';
  } else {
    for (var i = angka.length - 1; i >= 0; i--) {
      if (angka[i] <= num) {
        var remaining = num - angka[i];
        return roman[i] + toRoman(remaining);
      }
    }
    return '';
  }
}

console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('______|__________|_______');
console.log('4     | IV       | ', toRoman(4));
console.log('9     | IX       | ', toRoman(9));
console.log('23    | XXIII    | ', toRoman(23));
console.log('1453  | MCDLIII  | ', toRoman(1453));
console.log('1646  | MDCXLVI  | ', toRoman(1646));
