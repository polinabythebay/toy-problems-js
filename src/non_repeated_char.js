/*************************************************************
Given an arbitrary input string, return the first non-repeating character. 
For strings with all repeats, return 'sorry'.
**************************************************************/

//traverse string twice
//first to get frequency distribution of each elt
//second to return first found with freq of 1
//if none found of 1, return sorry
//running time: O(2n) = O(n) = linear.

function firstNonRepeatedCharacter (string) {
    var freq = {};

    for (var i = 0; i < string.length; i++) {
        if (freq[string.charAt(i)]) {
            freq[string.charAt(i)]++;
        } else {
            freq[string.charAt(i)] = 1;
        }
    }

    for (var j = 0; j < string.length; j++) {
        if (freq[string.charAt(j)] === 1) {
            return string.charAt(j);
        }
    }
    
    return "sorry";
}
