/* Longest Palindromic Substring */
// usando for 
function longestPalindromeUsingFor(s) {
    if (isPalindrome(s)) return s;

    let currentLongest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let ss = s.slice(i, j);
            if (isPalindrome(s.slice(i, j)) && ss.length > currentLongest.length) {
                currentLongest = ss;
            }
    }
}
    return currentLongest;
}

let str = "cbbd";
let str2 = "babad";

// console.log(longestPalindromeUsingFor(str));
// console.log(longestPalindromeUsingFor(str2));

/* ------------------------------------------------- */
// two pointer


// segunda resolução:

/*
o foco é: percorrer a string com ponteiros, testando as substrings e verificando se sao palindromos
pra isso eu começo do meio e expando para as extremidades com os ponteiros, verificando igualdade. 

tenho uma variavel de para armazenar o valor.
*/


var longestPalindromeUsingTwoPointer = function(s) {
    //console.log(s)
    // variavel que recebe a maior substring
    let longest = "";

    // crio a função que checa as extremidades, os parametros serao o indice do for que vai percorrer a string. 
    function checkLeftAndRight(left, right, loopValue) {
        // enquanto expando as extremidades e elas forem iguais
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            //console.log(`valor de left no loop ${loopValue}: ${s[left]}`)
            //console.log(`valor de right no loop ${loopValue}: ${s[right]}`)
            //checo se o tamanho do que ta sendo verificado é maior do que o que ja tenho armazenado em longest
            if (right - left + 1 > longest.length) {
                longest = s.slice(left, right+1);
                //console.log(`valor de longest no loop ${loopValue}: ${longest}`)
            }
            // se nao for continuo expandindo, afinal o objetivo é achar o maior palindromo
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        //checkLeftAndRight(i, i, i +1);
        checkLeftAndRight(i, i + 1, i);
    }

    return longest;
}

console.log(longestPalindromeUsingTwoPointer(str));
console.log(longestPalindromeUsingTwoPointer(str2));