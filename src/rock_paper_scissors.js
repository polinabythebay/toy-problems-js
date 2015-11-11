//Given a number of rounds n, 
//return all the possible rock-paper-scissors play possibilities 
//for that number of rounds.

//Examples
//rockPaperPermutation (0) //=> []
//rockPaperPermutation (1) //=> ['r','p','s']
//rockPaperPermutation (2) //=> [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]

function rockPaperPermutation (roundCount) {

//base array for founds
var rps = ['r','p','s'];
//result from applyArray()
var applied; 

//helper function
//apply every elt in arr1 to every elt in 
//arr2 and push the result to a new array
//that will be the size of 
//arr1.length * arr2.length
function applyArray(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      result.push(arr1[i] + arr2[j]); 
    }
  }
  return result;
}

//recursively apply the array
//from the previous round
//Counts the round down to zero.
function playRPS(count, result) {
  if (count === 0) {
    return applyArray(result, []);
  }
  if (count === 1) {
    return applyArray(result, ['']);
  }
  applied = applyArray(rps, result);
  return playRPS(count-1, applied);
}

return playRPS(roundCount, rps);
}


