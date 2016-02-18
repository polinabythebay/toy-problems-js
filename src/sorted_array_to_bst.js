//sorted array to binary search tree
//get middle of the array and make it the root
//recursively do the same for the left half and the right half

var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var sortedArraytoBST = function(arr, start, end) {
    
  if (start >= end) {
    return null;
  }
  
  //get middle of the array
  var middle = Math.floor((start+end)/2);
  
  //create a new node
  var node = new BinarySearchTree(arr[middle]);
  
  //left half of BST
  node.left = sortedArraytoBST(arr, start, middle);
  
  //right half of BST
  node.right = sortedArraytoBST(arr, middle+1, end);
  
  return node;
}

var arr = [2, 3, 4, 7, 17, 19, 21, 35, 89];
var result = sortedArraytoBST(arr, 0, arr.length);

/*
BST { value: 17,
  left: 
   { value: 4,
     left: { value: 3, left: [Object], right: null },
     right: { value: 7, left: null, right: null } },
  right: 
   { value: 35,
     left: { value: 21, left: [Object], right: null },
     right: { value: 89, left: null, right: null } } }
*/