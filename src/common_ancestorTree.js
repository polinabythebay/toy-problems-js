/*************************************************************
Implement the function getClosestCommonAncestor 
and getAncestorPath in the Tree class

**************************************************************/

/*************************************************************
Solution Two: very sneaky and not what I would have thought of
**************************************************************/
Tree.prototype.ancestorPath = function(target) {
  if (this === target) return [this];
  for (var i = 0; i < this.children.length; i++) {
    var pathFromChild =
      this.children[i].ancestorPath(target);
    if (pathFromChild) {
      return [this].concat(pathFromChild);
    }
  }
  // If no subtree contains the target:
  return null;
};

Tree.prototype.closestCommonAncestor =
  function(child1, child2) {
    var path1 = this.ancestorPath(child1);
    var path2 = this.ancestorPath(child2);
    // If either of the children can’t be found:
    if (!path1 || !path2) return null;
    // We know this is a common ancestor
    var closestAncestor = this;
    // path1[i] && path2[i] holds when i is less
    // than the lengths of both path1 and path2
    for (var i = 0; path1[i] && path2[i]; i++) {
      if (path1[i] === path2[i]) {
        closestAncestor = path1[i];
      }
    }
    return closestAncestor;
};

/*************************************************************
Solution One
**************************************************************/

Tree.prototype.getClosestCommonAncestor = function(node1, node2){
  if (node1 === node2) {
      return node1.value;
  }
  var path1 = this.getAncestorPath(node1);
  var path2 = this.getAncestorPath(node2);
  //if they are not ancestors of the same tree
  if (path1.length === 0 || path2.length === 0) {
      console.log("nope");
      return null;
  }

  //traverse both paths and return the last common node
  //between them
  var index = 0;

  while(path1[index] === path2[index]) {
      index++;
  }

  return path1[--index] || null;
}



Tree.prototype.getAncestorPath = function(target){
  // TODO: implement me!
  var ancestorPath = [];
  
  var traverse = function(treeNode, path) {
     path.push(treeNode.value);
     //console.log("path", path);
     
     if (treeNode.value === target.value) {
         ancestorPath = path;
         //console.log("found target");
         return;
     }
     //if treenode doesn't have any children and we
     // haven't found the target
     else if (treeNode.children.length === 0) {
         //console.log("reached end of branch, return");
         return;
     }
     
     //keep traversing through the paths
     else {
         for(var i = 0; i < treeNode.children.length; i++) {
             //want to create a separate path for every 
             //subtree call
             var newPath = path.slice(0);
             traverse(treeNode.children[i], newPath);
         }
     }
  }
  
  traverse(this, []);
  return ancestorPath;
  //console.log("ancestors", ancestorPath);
}

/*************************************************************
REST OF TREE CLASS

**************************************************************/

var Tree = function(value){
  this.children = [];
  this.value = value;
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};


/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

var grandma = new Tree('grandma');
var mom = new Tree('mom');
var uncle = new Tree('uncle');
var aunt = new Tree('aunt');
grandma.addChild(mom);
grandma.addChild(uncle);
grandma.addChild(aunt);
var me = new Tree('me');
var sister = new Tree('sister');
var cousin = new Tree('cousin');
var nephew = new Tree('nephew');
mom.addChild(me);
mom.addChild(sister);
uncle.addChild(cousin);
aunt.addChild(nephew);
//console.log(grandma);
var fred = new Tree('fred');
var bob = new Tree('bob');

//grandma.getAncestorPath(fred);
grandma.getClosestCommonAncestor(fred, bob);
