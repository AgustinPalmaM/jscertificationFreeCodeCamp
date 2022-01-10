// Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    let abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    let abecedarioMayusc = {}
    let abecedarioCheck = {}

    for (const i in abecedario) {
        let mayusc = abecedario[i].toUpperCase();
        let indice = parseInt(i) + 1
        abecedarioCheck[indice] = mayusc
    }

    for (const i in abecedario) {
        let mayusc = abecedario[i].toUpperCase();
        let indice = parseInt(i) + 1
        if (indice <= 13) {
            abecedarioMayusc[mayusc] = indice + 13 ;
        } else {
            abecedarioMayusc[mayusc] = indice - 13 ;

        }
    }
    let arr = Array.from(str)
    let translatedText = []

    for (const i in arr) {
       if (abecedarioMayusc.hasOwnProperty(arr[i])) {
           translatedText.push(abecedarioCheck[abecedarioMayusc[arr[i]]])
       } else {
           translatedText.push(arr[i])
       }
    }

    return translatedText.join('')

   
    
  }

rot13("SERR PBQR PNZC");
