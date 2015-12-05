//generates all combinations of coinSums
//in addition to returning number of combinations
//I realize this isn't what the problem entails
//but I wanted to see if I could figure it out.
coins = [1,2,5,10,20,50,100,200];

function coinSums (total, coins) {

  //sort coins from largest to smallest
  //does not assume it's ordered descending
  coins.sort(function(a,b) {return b-a});
  var counts = new Array(coins.length);
  var combinations = [];
  
  function printCombinations(coins, counts, startIndex, totalAmount) {

    if (startIndex >= coins.length) {
        combinations.push(printOneCombination(counts));
        return;
    }

    if(startIndex === coins.length-1 && totalAmount % coins[startIndex] === 0 ) {
            counts[startIndex] = totalAmount/coins[startIndex];
            printCombinations(coins, counts, startIndex+1,0);
    }
    else {
        for (var i = 0; i <= totalAmount/coins[startIndex];i++) {
            counts[startIndex] = i;
            printCombinations(coins, counts, startIndex+1, totalAmount- coins[startIndex]*i);
        }
    }
  }

  function printOneCombination(counts) {
    var result = [];
    for (var i = 0; i < counts.length; i++) {
        for (var j = 0; j < counts[i]; j++) {
            result.push(coins[i]);
        }
    }
    return result;
  }
  
  printCombinations(coins, counts, 0, total);
  return combinations.length;
}

//////*************** Only counts combinations, does not print them out *******************/////////

function makeChange(total, coins) {
    //sort coins from largest to smallest
    coins.sort(function(a,b) {return b-a});
    var combinations = 0;
    
    function recurse(index, remainder) {
        var coin = coins[index];
        if (index === coins.length-1) {
            //if smallest coin is always one,
            //do this
            combinations++;
            //otherwise, need to do this:
            //remainder % coin === 0 && combinations++;
            return;
        }
        
        while(remainder >= 0) {
            //console.log("index", index+1, "remainder", remainder);
            recurse(index+1, remainder);
            remainder -= coin;
        }
       
    }
    //start with largest coin at index 0
    recurse(0, total);
    return combinations;
}

