//recurse until the string is length 1 by repeatedly 
//removing the first character
//complexity is N! because there are n! possible
//permutations of a string of length N.

//example. all permutations of LSE:

//LSE, SLE, SEL, LES, ELS, ESL

//Permutations
//['A','B','C']
//['ABC', 'ACB', 'BAC', 'BCA', 'CBA', 'CAB']
//Permutations: order does matter

//permutations are ALL POSSIBLE WAYS
//that running time is in n!
//we care about the order
//example: how many ways can you hand out 1st, 2nd, and 3rd place?

//combinations would be

//approach
//swap based recursive approach

/*************************************************************
Latest version, much better
**************************************************************/

//time: factorial O(!N)
//space: O(log(N)). making log N additional arrays
//and recursive call stack is no more than log(N) deep
//depth of the tree of calls

var permutations = function(arr) {
    var results = [];
    var permutate = function(str, arr) {
        //base case
        if (arr.length === 0) {
            results.push(str);
        }
        for (var i = 0; i < arr.length; i++) {
            var new_str = str + arr[i];
            //remove i from array and pass it in
            //make a copy of that array
            var new_arr = arr.slice();
            new_arr.splice(i,1);
            permutate(new_str, new_arr);
            
        }
        
    }
    permutate("", arr);
    return results;
}

permutations(['a','b','c']);

//[a,b,c]
//P("" ,abc)
//P("a", bc)
//P("ab",c)
//P("abc","") //want to add this to my results

function permutations(arr) {
  var ret = [];
  
  function perms(arr, str) {
      console.log(arr);
      console.log(str);

      if (arr.length === 0) {
          ret.push(str);
      } else {
          
      for (var i = 0; i < arr.length; i++) {
          
          var new_str = str + arr[i];
          var new_arr = arr.slice();
          
          new_arr.splice(i, 1); //remove ith element
          perms(new_arr, new_str);
      }
      }
  }
  
  perms(arr, '');
  
  return ret;
}

console.log(permutations(['a', 'b', 'c']));

/*************************************************************
Version 1
**************************************************************/

//this is still confusing to me
//do not completely understand this

function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      console.log("cur i",cur,i);
      console.log("arr",arr);
      if (arr.length === 0) {
          console.log("push")
        results.push(memo.concat(cur));
      }

      var nextResult = memo.concat(cur);
      console.log("next arr", nextResult, arr);
      permute(arr.slice(), nextResult);
      console.log("before", arr.length);
      
      //rotates the characters
      arr.splice(i, 0, cur[0]);
      console.log("after", arr.length);
      console.log('splice',arr);
      
    }

    return results;
  }

  return permute(inputArr);
}

//https://www.youtube.com/watch?v=KBHFyg2AcZ4

/*************************************************************
Version 2
**************************************************************/


//return array of strings
function permutator(inputArr) {
  var results = [];
  var size = inputArr.length;
  
  function permute(arr, result) {
    var current;
    if (!result) {
        result = [];
    }

    for (var i = 0; i < arr.length; i++) {
      current = arr.splice(i, 1);
      console.log("cur i",current,i);
      console.log("arr",arr);
      
      //add current to next result
      var nextResult = result.concat(current);
      
      //if nextresult is size of a permutation
      //push to list of permutations
      if (nextResult.length === size) {
          console.log("push");
          results.push(nextResult);
      }
      
      console.log("next result", nextResult);
      console.log("recursive call", arr, nextResult);
      console.log("***************************");
      
      //if nextResult is the size of a valid permutation
      //we know that arr.slice() is an empty array
      //since it's an empty array
      //it will do the next work after the recursive call
      var nextArray = arr.slice();
      permute(nextArray, nextResult);

      //rotates the characters
      arr.splice(i, 0, current[0]);
      console.log("after", arr.length);
      console.log('splice',arr);
      
    }

    return results;
  }

  return permute(inputArr);
}