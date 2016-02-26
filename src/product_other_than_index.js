//input: an array of integers (can assume positive integers)
//output: an array of integers, such that the value at each index in
//the output is the product of all integers except the integer at that index

//constraints: 
//you cannot use division
//do not multiply more than you need to (goal is to
//solve this problem with O(N) time complexity

var productOtherThanIndex = function(arr) {
    var productOfIndexes = Array(arr.length);
    //iterate twice through array
    
    //first pass 
    //index 0: 1 (base case)
    //index 1: 1 * arr[0]
    //index 2: 1 * arr[0] * arr[1]
    //index 3: 1 * arr[0] * arr[1] * arr[2]
    
    //second pass
    //index 3: currentProduct * 1
    //index 2: currentProduct * 1 * arr[3]
    //index 1: currentProduct * 1 * arr[3] * arr[2]
    //index 1: currentProduct * 1 * arr[3] * arr[2] * arr[1]
    
    //time complexity: 2n ~ O(n), linear time
    
    var lastProduct = 1;
    for (var i = 0; i < arr.length; i++) {
        productOfIndexes[i] = lastProduct;
        lastProduct = lastProduct * arr[i];
    }
    
    lastProduct = 1;
    
    for(var i = arr.length-1; i >= 0; i--) {
        productOfIndexes[i] = productOfIndexes[i] * lastProduct;
        lastProduct = lastProduct * arr[i];
    }
    
    return productOfIndexes;

}

productOtherThanIndex([5,2,1,3]); //[6,15,30,10]