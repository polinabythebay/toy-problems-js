function sumArray(array) {
  var highestSum = array[0];

  function traverseSubsetsAtIndexN (startIndex) {
    var current = array[startIndex];

    //single element 
    if (current > highestSum) {
        highestSum = current;
    }

    //continguous elements
    for (var i = startIndex+1; i < array.length; i++) {
      current = current + array[i];
      if (current > highestSum) {
          highestSum = current;
      }
    }
  }

  for (var i = 0; i < array.length; i++) {
    traverseSubsetsAtIndexN(i);
  }

  return highestSum;
}

//testing

arr = [ 1, 2, 3 ];

arr1 = [ 4, -1, 5 ];

arr2 = [ 10, -11, 11 ];

arr3 = [ 1, 2, 3, -6, 4, 5, 6 ];

//sumArray(arr3);
//another approach

function sumArray01(array) {

  var maxSum = Number.NEGATIVE_INFINITY;
  var currentSum;

  for (var start = 0; start < array.length; start++) {
    currentSum =0;
    for (var end = start; end < array.length; end++) {
      currentSum += array[end];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
  
}

//another more efficient way of doing it
//iterate through all endpoints, and for each 
//one look at only the best interval

//for each endpoint, max interval ending there 
//either has one number (start point = previous point)
//or a start point before the previous point.

//in this case, the best start point before the previous
//point is the same one we found


//for each endpoint
//max interval, either has one number 
//or a start point 
function sumArrayEfficient(array) {

  var maxSum = Number.NEGATIVE_INFINITY;
  var currentSum = 0;

  for (var i = 0; i < array.length; i++) {
    //add new number to current sum
    currentSum += array[i];
    //record as the largest sum if necessary
    maxSum = Math.max(maxSum, currentSum);
    //if negative, throw out earlier progress
    //and consider intervals starting at this point
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  
  return maxSum;
}
