/*************************************************************
Given a single input string write a function that produces
all possible anagrams of a string and outputs them as an array

This is similar to generating all permutations. Except in this case
if there are words with repeated letters, you will end up with 
repeated permutations. Ignore those and you've got your anagrams.

Is this actually combinations since we're not including redundancies?
**************************************************************/

/*************************************************************
Solution #3

**************************************************************/

var allAnagrams = function(string) {
  var result = {};
  // Base case
  if (string.length <= 1){
    return [string];
  }
  // For each letter in string
  string.split('').forEach(function(letter, i) {
    var remainingLetters = string.slice(0, i) + string.slice(i + 1);
    // For each anagram of the remaining letters
    allAnagrams(remainingLetters).forEach(function(anagram) {
      result[letter + anagram] = true;
    });
  });
  return Object.keys(result);
};


/*************************************************************
Solution #2
Handles object that stores permutations more gracefully
**************************************************************/

function allAnagrams = function(string) {
  var anagrams = {};
  var generator = function(text, options) {
    if (text.length === string.length) {
      //overwrites repeated permutations
      //so don't need to add a case here
      anagrams[text] = true;
    }

    for (var i = 0; i < options.length; i++) {
      generator(text + options[i], options.slice(0,i) + options.slice(i + 1));
    }
  }
  generator('', string);
  return Object.keys(anagrams);
}

/*************************************************************
Solution #1
Rotates characters after the recursive call
Not entirely graceful/understandable
**************************************************************/
function generateAnagrams(string) {
  //turn input string to array
  var inputArr = string.split("");
  //object of permutations
  var results = {};
  //size of one permutation
  var size = inputArr.length;
  
  //generates all permutations of word
  //if a word has repeated letters
  //there will be repeated permutations
  //all repeated permutations are ignored
  function permutate(arr, result) {
    //current letter
    var current;

    for (var i = 0; i < arr.length; i++) {
      current = arr.splice(i, 1);

      //add current to next result
      var nextResult = result + current;
      
      //if nextResult is size of a permutation
      //push to results
      if (nextResult.length === size) {
          //if current permutation is a repeat 
          //do not push it to results object
          if (results[nextResult] == undefined) {
              results[nextResult] = true;
          }
      }
      
      //if nextResult is the size of a valid permutation
      //we know that nextArray is an empty array
      //since it's an empty array
      //it will do the next work after the recursive call
      var nextArray = arr.slice();
      permutate(nextArray, nextResult);

      //rotates the characters
      arr.splice(i, 0, current[0]);
    }

    return results;
  }
  
  permutate(inputArr, '');
  
  //convert results object to array
  var anagrams = [];
  for (var item in results) {
      anagrams.push(item);
  }
  return anagrams;
}
