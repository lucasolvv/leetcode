/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/


/* raciocinio
Eu tenho uma palavra e quero saber onde ela começa dentro de outra. 
Para isso, escolho um índice inicial (left) no haystack e tento comparar o needle caractere por caractere. 
Uso um ponteiro (right) para andar pelo needle. 
Enquanto os caracteres batem, avanço o right. 
Se o right chegar ao tamanho do needle, significa que a palavra inteira foi comparada com sucesso, então retorno o left.
 Se falhar, passo para o próximo left e tento de novo.
*/

let haystack = "sadbutsad";
let needle = "sad";

function strStr(haystack, needle) {
    if (needle === "") return 0;

    for (let left = 0; left <= haystack.length - needle.length; left++) {
        let right = 0;
        while (right < needle.length && haystack[left + right] === needle[right]) {
            right++;
        }

        if (right === needle.length) {
            return left;
        };
    }
    return -1
}

console.log(strStr(haystack, needle));