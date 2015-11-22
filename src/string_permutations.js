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

var stringPermutations = function(string) {

}

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