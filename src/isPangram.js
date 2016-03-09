//Pangrams are sentences constructed by using every letter of the alphabet at least once.
//Input Format: Input consists of a string ss.
//Length of ss can be at most 103103 (1≤|s|≤103)(1≤|s|≤103) and it may contain spaces, 
//lower case and upper case letters. Lower-case and upper-case instances of a letter are considered the same.

//Output: Output a line containing pangram if ss is a pangram, otherwise output not pangram.

function processData(input) {

  function isPangram(str) {
      
      //remove white space and tolowercase
      str = str.replace(/ /g,'').toLowerCase();
      
      //build alpha hash
      var alpha = {};
      for (var i = 65; i <= 90; i++) {
          alpha[String.fromCharCode(i).toLowerCase()] = false;
      }
      
      
      if (str.length < 26) {
          return false;
      } else {
          for (var j = 0; j < str.length; j++) {
              alpha[str[j]] = true;
          }
          
          for (var letter in alpha) {
              if (alpha[letter] === false) {
                  return false;
              }
          }
          return true;
      }
  }
    
    var result = isPangram(input);
    if (result) {
        console.log("pangram");
    } else {
        console.log("not pangram");
    }

}