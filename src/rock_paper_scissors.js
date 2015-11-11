//Given a number of rounds n, 
//return all the possible rock-paper-scissors play possibilities 
//for that number of rounds.

//Examples
//rockPaperPermutation (0) //=> []
//rockPaperPermutation (1) //=> ['r','p','s']
//rockPaperPermutation (2) //=> [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]

function rockPaperPermutation (roundCount) {

var rps = ['r','p','s'];

function playRPS(count, result) {
  if (count === 0) {
    return applyArray(result, []);
  }
  if (count === 1) {
    return applyArray(result, ['']);
  }
  var apply = applyArray(rps, result);
  count = count-1;
  return playRPS(count, apply);
}

function applyArray(arr1, arr2) {
  var result = [];
  var temp = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      result.push(arr1[i] + arr2[j]); 
    }
  }
  return result;
}

return playRPS(roundCount, rocks);
}


