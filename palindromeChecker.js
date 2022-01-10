// Palindrome Checker

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
    let strLowerCase = str.toLowerCase()
    let arr = Array.from(strLowerCase)
    let abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9', '0']
    let onlyChars = []
    for (let i in arr) {
        if (abecedario.includes(arr[i])) {
            onlyChars.push(arr[i])
        }
    }
    let onlyCharsTwo = [...onlyChars]
    let arrReverse = onlyCharsTwo.reverse()
    let onlyCharsString = onlyChars.join('');
    let arrReverseString = arrReverse.join('')

    return onlyCharsString === arrReverseString;
}

;
console.log(palindrome("eye"));
