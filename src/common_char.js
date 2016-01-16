/*************************************************************
Write a function that accepts two strings as arguments, and returns only
the characters that are common to both strings.

Your function should return the common characters in the same order that 
they appear in the first argument. Do not return duplicate characters and 
ignore whitespace in your returned string.
**************************************************************/

var commonCharacters = function(str1, str2) {

  var results = '';
  var mem = {};

  for (var i = 0; i < str1.length; i++) {

    if (str1.charAt(i) === ' ') {
      continue;
    }

    for (var j = 0; j < str2.length; j++) {
      if (mem[str1.charAt(i)]) {
        continue;
      }
        
      if (str1.charAt(i) === str2.charAt(j)) {
        mem[str1.charAt(i)] = 1;
        results += str1.charAt(i); 
      }
    }
  }
  return results;
}
