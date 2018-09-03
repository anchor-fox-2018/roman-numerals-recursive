function toRoman(angka){
    var angkaString = String(angka)
    //var angkaSpesial = ['4','9']
    if(angkaString.length === 1){
        //var hasil = ''
        if(angka < 4){
            var hasil = ''
            for(var i = 0;i < angka;i++){
                hasil+= 'I';
            }
            return hasil
        }else if(angkaString === '4'){
            return 'IV'
        }else if(angkaString === '5'){
            return 'V'
        }else if(angka > 5 && angka < 9){
            var hasil = 'V'
            for(var i = 5;i < angka;i++){
                hasil+= 'I';
            }
            return hasil
        }else if(angkaString === '9'){
            return 'IX'
        } 
    }else if(angkaString.length === 2){
        //var hasil = ''
        if(Number(angkaString[0]) < 4){
            var hasil = ''
            for(var i = 0;i < Number(angkaString[0]);i++){
                hasil+= 'X';
            }
            return hasil + toRoman(angkaString.substring(1))
        }else if(angkaString[0] === '4'){
            return 'XL' + toRoman(angkaString.substring(1))
        }else if(angkaString[0] === '5'){
            return 'L' + toRoman(angkaString.substring(1))
        }else if(Number(angkaString[0]) > 5 && Number(angkaString[0]) < 9){
            var hasil = 'L'
            for(var i = 5;i < Number(angkaString[0]);i++){
                hasil+= 'X';
            }
            return hasil + toRoman(angkaString.substring(1))
        }else if(angkaString[0] === '9'){
            return 'XC' + toRoman(angkaString.substring(1))
        } 
    }else if(angkaString.length === 3){
        //var hasil = ''
        if(Number(angkaString[0]) < 4){
            var hasil = ''
            for(var i = 0;i < Number(angkaString[0]);i++){
                hasil+= 'C';
            }
            return hasil + toRoman(angkaString.substring(1))
        }else if(angkaString[0] === '4'){
            return 'CD' + toRoman(angkaString.substring(1))
        }else if(angkaString[0] === '5'){
            return 'D' + toRoman(angkaString.substring(1))
        }else if(Number(angkaString[0]) > 5 && Number(angkaString[0]) < 9){
            var hasil = 'D'
            for(var i = 5;i < Number(angkaString[0]);i++){
                hasil+= 'C';
            }
            return hasil + toRoman(angkaString.substring(1))
        }else if(angkaString[0] === '9'){
            return 'CM' + toRoman(angkaString.substring(1))
        } 
    }else if(angkaString.length === 4){
        //var hasil = ''
        if(Number(angkaString[0]) < 4){
            var hasil = ''
            for(var i = 0;i < Number(angkaString[0]);i++){
                hasil+= 'M';
            }
            return hasil + toRoman(angkaString.substring(1))
        }
    }
    //return angkaString
}
console.log('My Totally sweet testing script\n');
console.log('Input | expected | actual');
console.log('______|__________|________')
console.log('4     | IV       |',toRoman(4));
console.log('9     | IX       |',toRoman(9));
console.log('23    | XXIII    |',toRoman(23));
console.log('1453  | MCDLIII  |',toRoman(1453));
console.log('1646  | MCDXLVI  |',toRoman(1646));