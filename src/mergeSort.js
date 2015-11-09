//we have an array from array[0] to array[n-1]
//generalize this to an array from [p] to [r]

//step 1: divide by finding the number q, which is midway between
//p and r. do this step the same we done in binary search.

//q = Math.floor((p+r)/2);

//recursively sort subarray array[p..q] and array[q+1..r]

//combine sorted subarrays

//basecase: subarray containing fewer than 2 elts
//p >= r.
//only recurse when p < r


var mergeSort = function(array) {
  if (array.length > 1) {
    var q = Math.floor((1+array.length)/2);
    //array[p..q]
    mergeSort(array.slice(1,q+1));
    //array[q+1..r]
    mergeSort(array.slice(q+1, array.length));
    //merge sorted subarrays
    merge(array, 1, q+1, array.length);
  }
}

// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array

//merges two adjacent sorted subarrays
var merge = function(array, p, q, r) {
  //allocate two temporary arrays
  var lowHalf = array.slice(p, q);
  var highHalf = array.slice(q, r);

  //vars to index sorted subarrays
  var lowIndex = 0;
  var highIndex = 0;
  var arrayIndex = p;

  while ((lowIndex < lowHalf.length) && (highIndex < highHalf.length)) {
      if (lowHalf[lowIndex] < highHalf[highIndex]) {
      array[p] = lowHalf[lowIndex];
      p++;
      lowIndex++;
    }
    if (highHalf[highIndex] < lowHalf[lowIndex]) {
      array[p] = highHalf[highIndex];
      highIndex++;
      p++;
    }
  }

  //one more step
  //if either array have elts left in it
  //add them to array
  //only one of the arrays should have elts left in them

  if (lowHalf.length > highHalf.length) {
    //allocate rest of lowHalf
  } else {
    //allocate rest of highHalf
  }

}


