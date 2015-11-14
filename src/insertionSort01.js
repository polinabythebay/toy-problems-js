
//insertion sort takes an array
//inserts an element into the sorted subarray to its left

var insertionSort = function(array) {
  //iterate through array
  for (var i = 0; i < array.length; i++) {
    insert(array, i+1);
  }
  return array;
}

//to insert next element, repeatedly compare
//it with elements to its left, going from left to right
//slides value to the right

var insert = function(array, rightMostElt) {

  var key = array[rightMostElt];

  //iterate through sorted subarray
  for (var i = rightMostElt -1; i <= 0; i--) {

  //if key is less than elt to its left
  //slide that elt one position to the right
   if (key < array[i]) {
    array[i+1] = array[i];
   }

   //if key is greater than elt to its left
   //key drops in previous position

   if (key > array[i]) {
    array[i+1] = key;
    break;
   }
  }
}

  



}
