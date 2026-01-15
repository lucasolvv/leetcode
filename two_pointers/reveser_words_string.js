        // two pointer 
    // reverse words in a string 

    /*

    */


    function reverseWords(s){
        let res = "";
        let r = s.length - 1, l = s.length - 1;

        while(l >= 0){
            while(l >= 0 && s[l] === " "){
                l--;
            }
            if (l < 0) break;
            r = l;

            while(l >= 0 && s[l] !== " "){
                l--;
            }
            if (res.length > 0){
                res += " ";
            }
            res += s.slice(l+1, r+1);
        }

        return res;
    };

    let word = "  hello world  ";

    console.log(reverseWords(word));