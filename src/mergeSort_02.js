//another take on merge sort that I did, this seems a lot simpler

//recursively divide into halves until you have a half of 1
//merge sorted subarrays

var mergeSort = function(input){
  // your work here
  
  //if input is size one, merge
  //else divide recursively
      if (input.length === 1) {
          return input;
      } else {
          var middle = input.length/2;
          var leftHalf = input.slice(0,middle);
          var rightHalf = input.slice(middle);
          return merge(mergeSort(leftHalf), mergeSort(rightHalf));
      }
}

var merge = function(arr1, arr2) {
    //compare first element from each list
    //place smaller one in sorted merged list
    //keep comparing first elements until all are placed
    var merged = [];
    var total_length = arr1.length + arr2.length;
    while (merged.length !== total_length) {
        
        if (arr1[0] > arr2[0] || arr1.length === 0) {
            merged.push(arr2[0]);
            arr2.shift();
        } else {
            merged.push(arr1[0]);
            arr1.shift();
        }
    }
    return merged;
}

merge([1,3,5],[2,4]);
mergeSort([3,4,1,6,2,5]);