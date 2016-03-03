/********************************************************************* 
 *                     Pair Programming I                            *
 *                                                                   *
 *  List the Time and Space complexity of each         *
 *                of the following functions in the space provided   *
 *                                                                   *
 *********************************************************************/

/**
 * Problem 1:
 *  Time Complexity: O(1)
 *  Auxiliary Space Complexity: O(1)
 **/

//deletes 1 key if there is one
function isThereCat(object) {

  while(object['cat']) { //constant
    console.log("There is cat!");
    delete object['cat']; //constant space and time
  }
  console.log("There is no cat!"); //constant
};


/**
 * Problem 2:
 *  Time Complexity: O(1)
 *  Auxiliary Space Complexity: O(1)
 **/

function powerOfThrees(int) {
  var result = []; //constant space
  var count = 1; //constant time
  var temp = 1; //constant time

  while(count <= 3) {
    temp *= int;
    result.push(temp);
    count++;
  }

  return result; //constant space and time
};


/**
 * Problem 3:
 *  Time Complexity: O(N^2)
 *  Auxiliary Space Complexity: O(1)
 **/

function findDuplicate(collection) {
  var len = collection.length; //constant time 
  var currItem; //constant space

  for (var i = 0; i < len; i++) { //linear time complexity
    currItem = collection[i]; //constant time

    for (var j = 0; j < len; j++) { //linear time operation
      if (j !== i) { //constant
        if (currItem === collection[j]) { //constant
          return true;
        }
      }
    }
  }
  return false;
};


/**
 * Problem 4:
 *  Time Complexity: O(N*M)
 *  Auxiliary Space Complexity: O(N*M)
 **/

 //1,1,1,1
 //1,1,1

function intersectionPoints(array1, array2) {
  var result = []; //contant space
  var points; //constant 

  for (var i = 0; i < array1.length; i++) { //linear for N
    for (var j = 0; j < array2.length; j++) { //linear for M
      if (array1[i] === array2[j]) { //constant time
        points = [array1[i], array2[j]]; //constant space
        result.push(points); 
        points = [];
      }
    }
  }

  return result;
};


/**
 * Problem 5:
 *  Time Complexity: O(N)
 *  Auxiliary Space Complexity: N+1, O(N)
 **/

function nthFibonacci(n) {
  var result = [0,1]; //constant space

  for(var i = 1; i < n; i++) { //linear operations
    result[i+1] = result[i] + result[i-1];
    //adding a new index to the sequence
  }

  return result[n]; //constant time operation
};


/**
 * 
 *
 * Problem: Refactor findDuplicate to find all repeating elements in O(n) time complexity
 *          What is the auxiliary space complexity of your solution?
 *
 *          Auxiliary Space Complexity: linear O(N)
 **/

function findDuplicateN(arr) {
    var pairs = {};
    
    for (var i = 0; i < arr.length; i++) {
        if (pairs[arr[i]]) {
            pairs[arr[i]]++;
        } else {
            pairs[arr[i]] = 1;
        }
    }
    
    for (items in pairs) {
        if (pairs[items] > 1) {
            return true;
        }
    }
    return false;
}

/**
 * 
 *  Time Complexity: exponential, 2^N
 *  Auxiliary Space Complexity: O(N), the depth of the call stack is gonna be N
 **/

//time complexity with memoization: linear
//space complexity: however many things it puts into the cache, which is linear

function nthFibonacci(n){
  var result;
  var cache = {};

  function searchFib(index){

    if (cache[index] !== undefined) {
      return cache[index];
    }

    if(index < 2){
      return index;
    } else {

      var toInsert = searchFib(index-2) + searchFib(index-1);
      cache[index] = toInsert;
      return cache[index];

      //return searchFib(index-2) + searchFib(index-1);
    }
  }

  result = searchFib(n);
  return result;
};