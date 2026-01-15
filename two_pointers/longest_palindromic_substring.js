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

function longestPalindromeUsingTwoPointers(s) {
    if (s.length < 2) return s;
    let start = 0, maxLen = 0;

    function expandAroundCenter(l, r) {
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        res = r - l - 1;
        return res;
    }

    for(let i = 0; i < s.length; i++) {
        //palindromo impar
        let len1 = expandAroundCenter(i, i);

        //palindromo par
        let len2 = expandAroundCenter(i, i+1);

        let len = Math.round(len1, len2);

        if (len > maxLen) {
            maxLen = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.slice(start, start + maxLen);
}


console.log(longestPalindromeUsingTwoPointers("babad"));


function isPalindrome(s){
    let reversed = s.split("").reverse().join("");
    return s === reversed;
};