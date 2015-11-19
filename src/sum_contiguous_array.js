function sumArray(array) {
  var highestSum = array[0];

  function traverse (startIndex) {
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
    traverse(i);
  }

  return highestSum;
}

//testing

arr = [ 1, 2, 3 ];

arr1 = [ 4, -1, 5 ];

arr2 = [ 10, -11, 11 ];

arr3 = [ 1, 2, 3, -6, 4, 5, 6 ];

//sumArray(arr3);