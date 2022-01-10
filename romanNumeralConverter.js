// Roman Numeral Converter

// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.


function convertToRoman(num) {

    let romanSymbols = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC',
        100: 'C',
        200: 'CC',
        300: 'CCC',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM',
        1000: 'M',
        2000: 'MM',
        3000: 'MMM'
    } 
    
    let numDesc = []
    if ((num % 10) === 0) {
        numDesc.push(0)
    } else {
        numDesc.push(num % 10)
    }

    if ((num % 100) === 0) {
        numDesc.push(0)
    } else {
        numDesc.push(num % 100 - num % 10)
    }

    if ((num % 1000) === 0) {
        numDesc.push(0)
    } else {
        numDesc.push(num % 1000 - num % 100)
    }

    numDesc.push(num - num % 1000)
    let numDescReverse = numDesc.reverse()

    let romanNums = []
    for (const i in numDescReverse) {
        let a = romanSymbols[numDescReverse[i]]
        romanNums.push(a);
    }
     return romanNums.join('')
   }

convertToRoman(36);
