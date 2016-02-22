//Largest Palindrome: 906609
//from 993 * 913
//Implementation:
function largestPalindromeThreeDigits() {
  
  var largestPalindrome = 0;
  var digitA = 0;
  var digitB = 0;
  
  for (var i = 999; i >= 100; i--) {
    for (var j = i; j >= 100; j--) {
      var product = i * j;
      if (isPalindrome(product)) {
        if (product > largestPalindrome) {
          largestPalindrome = product;
          digitA = i;
          digitB = j;
        }
      }
    }
  }
  
  console.log(digitA, digitB);
  console.log(largestPalindrome);
}

largestPalindromeThreeDigits();
  
function isPalindrome(num) {
  return num.toString() === num.toString().split("").reverse().join("");
}