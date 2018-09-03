function toRomanRec(number){
    var romanDictionary = [{symbol : 'M', value : 1000}, {symbol: 'CM', value: 900 }, {symbol : 'D', value : 500}, {symbol: 'CD', value: 400}, {symbol: 'C', value: 100}, {symbol: 'XC' , value: 90},  {symbol: 'L', value: 50}, {symbol: 'XL', value: 40}, {symbol: 'X', value: 10}, {symbol: 'IX' , value: 9}, {symbol: 'V', value: 5}, {symbol: 'IV' , value: 4}, {symbol: 'I', value:1}];
    
    if(number <= 0){
        return '';
    } else {
        for(var i = 0; i < romanDictionary.length; i++){
            if(number>=romanDictionary[i].value){
                return romanDictionary[i].symbol + toRomanRec(number-romanDictionary[i].value);
            }
        }
    }
}

console.log(toRomanRec(1646));
console.log(toRomanRec(4));
console.log(toRomanRec(1453));