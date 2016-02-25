//pre-order, in-order, post-order traversal of BST
var BST = function(value) {
    this.right = null;
    this.left = null;
    this.value = value;
}

var insert = function(root, value) {
    
    //create a new BST
    var new_bst = new BST(value);
    
    var traverseToInsert = function(node) {
        
        //if value is greater than node 
        //and node does not have a right
        //insert tree there
        if (value > node.value) {
            if (node.right === null) {
                node.right = new_bst;
            } else {
                traverseToInsert(node.right);
            }
        }
        if (value < node.value) {
            if (node.left === null) {
                node.left = new_bst;
            } else {
                traverseToInsert(node.left);
            }
        }
    }
    
    traverseToInsert(root);
}

var preOrder = function(node) {
    if (node === null) {
        return;
    }
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
}

var inOrder = function(node) {
    if (node === null) {
        return;
    }
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
}

var postOrder = function(node) {
    if (node === null) {
        return;
    }
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
}

var bst = new BST(3);
insert(bst, 2);
insert(bst, 5);
insert(bst, 6);
insert(bst, 4);
console.log(bst);
postOrder(bst);