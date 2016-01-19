/*************************************************************

  Start with the leftmost elt
  //if elt to the right has a smaller value, swap
  //if not, don't do anything
  //go to the next one
  //when you get to the end, repeat until no elts are 
  //swapped in a round

**************************************************************/

var bubbleSort = function(array) {
  var unsorted = true;

  while(unsorted) {
    unsorted = bubble();
  }

  function bubble() {
    var swapped = false;

    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i+1]) {
        swap(i, i+1);
        swapped = true;
      }
    }
    return swapped;
  }

  function swap(elt1, elt2) {
    var temp = array[elt1];
    array[elt1] = array[elt2];
    array[elt2] = temp;
  }
};

/*************************************************************
Better implementation I think
**************************************************************/

var bubbleSort = function(array) {
  var sorted;

  while(!sorted) {
    
    sorted = true;
    for(var i = 1; i < array.length; i++) {
      if(array[i-1] > array[i]) {
        sorted = false;
        array.swap(i-1, i);
      }
    }
  }
  return array;
};

Array.prototype.swap = function(i,j){
  var temp = this[j];
  this[j] = this[i];
  this[i] = temp;
};

