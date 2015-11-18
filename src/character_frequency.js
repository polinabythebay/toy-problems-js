//character frequency

//input: string
//output: array of arrays
//descending order by frequency
//if frequency is the same, ascending order by character

var charFreq = function(str) {
    var arr = str.split("");
    var bucket = {};
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        //store char frequencies
        if (bucket[arr[i]] === undefined) {
            bucket[arr[i]] = 1;
        } else {
            bucket[arr[i]]++;
        }
    }

  for (var elt in bucket) {
      result.push([elt, bucket[elt]]);
  }
  
  result.sort(function (a, b) { 
  //sort descending by number
  if (a[1] < b[1]) {
    return 1;
  }
  if (a[1] > b[1]) {
    return -1;
  }
  //if the same, sort ascending by alpha
  if (a[1] === b[1]) {
      if (a[0] > b[0]) {
          return 1;
      }
      if (a[0] < b[0]) {
          return -1;
      }
  }
});
  
  return result;
}

charFreq("mississippi");
