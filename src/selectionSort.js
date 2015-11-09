var selectionSort = function(array) {
  var index;
  
  for (var i = 0; i < array.length; i++) {
    index = minIndex(array, i);
    swap(array, i, index);
  }
  return array;
}

var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

var minIndex = function(array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;

  for (var i = minIndex+1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
      minIndex = i;
    }
  }
  return minIndex;
}