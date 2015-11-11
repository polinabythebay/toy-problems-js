//return the first thing that occurs an even number of times
function evenOccurence (arr) {
  var occurences = {};
  var bucket;

  //push all items to an obj
  //keep track of insertion time
  //and number of occurences
  for (var i = 0; i < arr.length; i++) {
      if (occurences[arr[i]] === undefined) {
          bucket = {};
          bucket.count = 1;
          bucket.insertion = i;
          occurences[arr[i]] = bucket;
      } else {
        occurences[arr[i]].count++;  
      }
  }
  
  //iterate through occurences and find
  //bucket with smallest insertion #
  //and count is modulo 2
  var first_occurence = arr.length;
  var elt = null;
  
  for (var item in occurences) {
      //if count is even
      if (occurences[item].count % 2 === 0) {
          if (occurences[item].insertion < first_occurence) {
              first_occurence = occurences[item].insertion;
              elt = item;
          }
      }
  }

  //make the type checker happy
  if (elt === null) {
    return elt;
  } else if (isNaN(+elt)) {
    return elt;
  } else {
    return +elt;
  }
}
