var quickSort = function(input) {

  //divide into two subarrays
  //mark items that have been divided
  //and a marker to separate the two groups
  //after you go through the elements once,
  //move first item to where the second marker is
  //and repeat the process recursively on the two sublists
  //to the right and left of the item
  
  //choose rightmost element in array as pivot
  
  var sort = function(arr, start, end) {
      if (end-start >= 1) {
          var newPivot = partition(arr, start, end);
          sort(arr, start, newPivot-1);
          sort(arr, newPivot+1, end);
      }
  }
  
  sort(input, 0, input.length-1);
  return input;
}

//partitions the elements at arr[start...end]
//such that they are separated into two groups
//the left group is less than the pivot at arr[end]
//and the right group is greater than the pivot at arr[arr]
//and the pivot is placed in between these groups 
//and the index of the pivot is returned
var partition = function(arr, start, pivot) {
    
    //pivot is at arr[pivot
    var middle = start;
    for (var i = start; i < pivot; i++) {
        
        if (arr[i] < arr[pivot]) {
            swap(arr, middle, i);
            middle++;
        }
    }
    //swap pivot with middle
    swap(arr, middle, pivot);
    
    return middle;
    
}

//swap two elements at index i and j
var swap  = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//quickSort([12, 7, 14, 9, 10, 11]);