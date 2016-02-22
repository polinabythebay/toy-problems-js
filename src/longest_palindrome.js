/*************************************************************
A function that finds the longest palindrome in a given string.
This is similar to finding the powerset, except filter by the
criteria that each subset must be a palindrome and each subset
must be consecutive. So I guess not really a power set :p
**************************************************************/

/*************************************************************
Attempt #3
Code cleanup a little bit more
**************************************************************/

var longestPalindrome = function(str) {

  var arr = str.split('');
  var longestPalindrome = '';

  var isPalindrome = function(left, right) {
    while(left < right) {
      if (arr[left] === arr[right]) {
        left++;
        right--;
      } else {
        return false;
      }
    }
    return true;
  }

  for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length-1; j > i; j--) {
      if (arr[i] === arr[j]) {
        if(isPalindrome(i, j) && (j+1-i > longestPalindrome.length)) {
            longestPalindrome = arr.slice(i, j+1).join("");
        }
      }
    }
  }
  
  return longestPalindrome;
}


/*************************************************************
Attempt #2, looks a lot nicer but running time still isn't
that great
**************************************************************/

var longestPalindrome = function(str) {

  var arr = str.split('');
  var longestPalindrome = '';

  var isPalindrome = function(left, right) {
    while(left < right) {
      if (arr[left] === arr[right]) {
        left++;
        right--;
      } else {
        return false;
      }
    }
    return true;
  }

  for (var i = 0; i < arr.length; i++) {
    //actually maybe this check captures all cases
    //
    for (var j = arr.length-1; j > i; j--) {

      if (arr[i] === arr[j]) {
        if(isPalindrome(i, j)) {
          var palindrome = arr.slice(i, j+1).join("");
          if (palindrome.length > longestPalindrome.length) {
            longestPalindrome = palindrome;
          }
        }
      }
      
    }
  }
  
  return longestPalindrome;
}

/*************************************************************
Attempt #1
**************************************************************/

var str = "My_dad_is_a_racecar_athlete";
var str1 = "aibohphobia";
var str2 = "There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg"
var str3 = "aaaa level eye redivider hannah";

var longestPalindrome = function(str) {

  var arr = str3.split('');
  var pairs = [];

  var isAnother = function(start) {
      for (var i = arr.length-1; i > start; i--) {
          if (arr[i] === arr[start]) {
              return i;
          }
      }
      return -1;
  }

  var generatePairs = function() {
      for (var i = 0; i < arr.length; i++) {
          var pair = isAnother(i);
          if (pair !== -1) {
              pairs.push([i, pair]);
          }
      }
  }

  var walk = function(left, right) {
      while(left < right) {
         if (arr[left] === arr[right]) {
            //console.log("left and right", arr[left], arr[right]);
            left++;
            right--;
         } else {
             return false;
         }
      }
      return true;
  }

  var printPalindromes = function() {
      generatePairs();
      var largestPalindrome = '';
      for (var i = 0; i < pairs.length; i++) {
          var isPalindrome = walk(pairs[i][0],pairs[i][1]);
          if (isPalindrome) {
              var palindrome = arr.slice(pairs[i][0], pairs[i][1]+1).join('');
              console.log( palindrome);
              if (palindrome.length > largestPalindrome.length ) {
                  largestPalindrome = palindrome;
              }
          }
      }
      return largestPalindrome;
  }
  printPalindromes();
}



