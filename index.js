//Número 5
function recebeString(string) {
    let palindromo = ''
    for(let i = string.length-1; i >= 0; i--) {
        palindromo += string[i]
    }
    console.log(palindromo)
}

recebeString('banana')