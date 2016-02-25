//is the input word an anagram of a palindrome?

//property: at most there is either 0 or 1
//odd number of letters
//the rest should be even if it's an anagram
//of a palindrome

var isAnagramPalindrome = function(word) {
    
    var letters = {};
    //iterate through word and get letter count
    for (var i = 0; i < word.length; i++) {
        if (letters[word[i]]) {
            letters[word[i]]++;
        } else {
            letters[word[i]] = 1;
        }
    }
    
    var numOdd = 0;
    //iterate through letter counts
    for (var letter in letters) {
        if (letters[letter] % 2 != 0) {
            numOdd++;
        }
    }
    
    console.log(letters);
    console.log(numOdd);
    
    return numOdd < 2;
}

isAnagramPalindrome("heeyyy"); //false