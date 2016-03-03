/**
 *   List the Time and Auxiliary Space Complexity of each of the following functions in the space provided
 **/

/**
 * Problem 1:
 *  Time Complexity: O(1), constant
 *  Auxiliary Space Complexity: O(1), constant
 **/

function firstTimesLast(array) {
  var result = null; //constant space operation

  if (array.length < 2) { //constant time operation, length property is constant
    return result; //return something already initialized
  } else {
    result = array[0] * array[length-1]; //constant time operation, constant time lookup in arrays
    return result;
  }
};

/**
 * Problem 2:
 *  Time Complexity: O(N), linear
 *  Auxiliary Space Complexity: O(N), linear
 **/

function mostFrequentOccurrence(string) {
  //allocating a new string which is size of input string
  //so linear space 
  var lowerString = string.toLowerCase(); //linear time operation
  var letters = {}; //constant space, constant time
  var mostFrequent = []; //constant space, constant time
  
  for(var i = 0; i < lowerString.length; i++) { //linear time operation
    if (letters[lowerString[i]]) { //constant time operation
      letters[lowerString[i]] ++; //constant time operation

    } else {
      letters[lowerString[i]] = 1; //constant time operation
      //space allocation up to a linear number of times in the worst case
      //best case the string only has one character so it's constant
    }
  }

  //worse case constant time operation (at most 26 key value pairs)
  //to iterate through all keys
  //best case a constant operation bc you're
  //only iterating through one key
  for(var key in letters) {
    if (!mostFrequent.length) { //constant time
      mostFrequent = [key, letters[key]]; //constant space/time
    } else {
      if (letters[key] > mostFrequent[1]) { //constant time
        mostFrequent = [key, letters[key]]; //constant space/time
      }
    }
  }

  return mostFrequent[0];
};

/**
 * Problem 3:
 *  Time Complexity: O(n^2), quadratic
 *  Auxiliary Space Complexity: O(1), constant
 **/

function printUnorderedPairs(array) {
 //time complexity=  n * ((n)+(n-1)+(n-2)...)
 //=  (n) * (1/2)(n+1)
 //drop coefs (1/2) and lower order terms (1)
 //= n*n

 for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      console.log(array[i] + "," + array[j]); //constant space
    }
  }
};

/**
 * Problem 4:
 *  Time Complexity: O(log N), logarithmic
 *  Auxiliary Space Complexity: O(log N), logarithmic
 **/

//upfront cost is nlogn for sorted array
function sortedArraySearch(sortedArray, target) {

  var result = false; //constant space, constant time

  var hunt = function(start, end) {

    //constant time 
    if (start >= end-1 && (sortedArray[start] === target || sortedArray[end] === target)){
      result = true; //constant space
      return;
    } else if (start >= end-1){ //constant time
      return;
    }

    var mid = Math.floor((start + end) / 2); //constant time

    if (sortedArray[mid] === target){  //constant time
      result = true; //constant space
      return;
    } else if (target > sortedArray[mid]){ //constant time
      hunt(mid, end); //log time
      //depth of call stack is at most log n
    } else if (target < sortedArray[mid]){ //constant time
      hunt(start, mid); //log time
    }

  }

  hunt(0, sortedArray.length-1);
  return result;
};

/**
 * Problem 5:
 *  Time Complexity: O(n*m)
 *  Auxiliary Space Complexity: O(n*m)
 **/

function makeCombinedMatrix(arrayOne, arrayTwo) {
  var result = []; //constant space
  var row; //constant space

  for (var i = 0; i < arrayOne.length; i++) { //linear by m
    row = []; //constant space

    for (var j = 0; j < arrayTwo.length; j++) { //linear by n
      row.push(arrayTwo[j] + arrayOne[i]);
    }

    result.push(row); //n*m space
  }

  return result;
};