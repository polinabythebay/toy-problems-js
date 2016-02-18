/*
Given a root of a binary search tree and a key x, 
find the largest key in the tree that is smaller than x.


Example: if an in-order list of all keys in the tree is {2, 3, 4, 7, 17, 19, 21, 35, 89} 
and x is 19, the biggest key that is smaller than x is 17.
*/

var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var arr = [2, 3, 4, 7, 17, 19, 21, 35, 89];

//use this method to create a BST (it's in another file)
var result = sortedArraytoBST(arr, 0, arr.length);

var largestSmallerKey = function(BST, target) {
    
  var keyValue = 0;
  
  var traverseBST = function(BST) {
      
    //if smaller than target
    if (BST.value < target) {
      keyValue = BST.value;
      //go to right node and update keyValue
      traverseBST(BST.right);
    }
    
    //if larger than target
    if (BST.value > target) {
      //go to left node
      traverseBST(BST.left);
    }
    
    //if found target
    if (BST.value === target) {
      //check if there is a left child
      if (BST.left) {
          keyValue = BST.left.value;
      }
      return;
    }
      
  }
  
  traverseBST(BST);
  
  console.log("value", keyValue);
  return keyValue;
}

largestSmallerKey(result, 2, 0);
