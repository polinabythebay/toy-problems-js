/*************************************************************
Given a single input string write a function that produces
all possible anagrams of a string and outputs them as an array

This is similar to generating all permutations. Except in this case
if there are words with repeated letters, you will end up with 
repeated permutations. Ignore those and you've got your anagrams
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
