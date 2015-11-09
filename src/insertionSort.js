var insertionSort = function() {
  for (var i = 1; i < array.length; i++) {
    insert(array, i-1, array[i]);
  }
  return array;
}

var insert = function(array, rightMostIndex, value) {
  var key = value;

  for (var i = rightMostIndex; i >= 0; i--) {
    if (array[i] > key) {
      array[i+1] = array[i];
    }

    if (array[i] <= key) {
      array[i+1] = key;
      break;
      //what if I put return array here?
    }

    if (i === 0) {
      array[i] = key;
    }
  }
  
  return array;
}