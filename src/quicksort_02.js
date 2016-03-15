
//space: log n
//time: log n
var quickSort = function(input) {
    if (input.length <= 1) {
        return input;
    }
    
    var leftArr = [];
    var rightArr = [];
    pivotIndex = Math.floor(input.length/2);
    pivot = input[pivotIndex];
    
    for (var i = 0; i < input.length; i++) {
        if (i !== pivotIndex) {
            if (input[i] < pivot) {
                leftArr.push(input[i]);
            } else {
                rightArr.push(input[i]);
            }
        }
    }

   return quickSort(leftArr).concat(pivot).concat(quickSort(rightArr));
    
}

quickSort([12, 7, 14, 9, 10, 11]);