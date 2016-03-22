 /*************************************************************************
  *                          Homework IX                                  *
  *                                                                       *
  *  Problem: Lattice Paths                                               *
  *                                                                       *
  *  Prompt: Count the number of unique paths to travel from the top left *
  *          to the bottom right of a lattice of squares.                 *
  *                                                                       *
  *  Input:  An interger N (which is the size of the lattice)             *
  *  Output: An interger (which represents the number of unique paths)    *
  *                                                                       *
  *  Example: N = 2 (2x2 board) => 6 (number of unique paths)             *
  *                                                                       *
  *  What is the time and auxilliary space complexity of your solution?   *
  *                                                                       *
  *  Note: When moving through the lattice, you can only move either down *
  *        or to the left.                                                *
  *                                                                       *
  *        Try implementing your solution using side effects recursion or *
  *        pure recursion.                                                *
  *                                                                       *
  *  Additional Resources:                                                *
  *    1: https://projecteuler.net/problem=15                             *
  *    2: https://en.wikipedia.org/wiki/Lattice_path                      *
  *                                                                       *
  *************************************************************************/
//Third take not using a helper function








//SECOND TAKE: same concept, just much simpler, removes
//creating unnecessary board

function latticePaths(n) {
    var count = 0;
    
    function traverse(x, y) {
        if (x === n && y === n) {
            count++;
            return;
        }
        
        else if (x > n || y > n) {
            //terminate recursive call
            //when off the lattice
            return;
        }
        
        traverse(x+1, y);
        traverse(x, y+1);
    }
    
    traverse(0,0);
    return count;
}

latticePaths(2);

//FIRST TAKE. did not need to make a full board, but it did help me 
//feel better about this

var latticePaths = function(n){
    var paths = [];
    var lattice = buildLattice(n);

    function traverse(x, y, path) {
        if (x === n && y === n) {
            path.push([x,y]);
            paths.push(path);
            return;
        }
        
        //if right is defined, go right
        if (lattice[x][y+1] !== undefined) {
            var next_path = path.slice();
            next_path.push([x,y]);
            traverse(x, y+1, next_path);
        }
        
        //if down is defined, go down
        if (lattice[x+1] !== undefined) {
            var next_path = path.slice();
            next_path.push([x,y]);
            traverse(x+1, y, next_path);
        }
    }
    
    traverse(0,0,[]);
    
    return paths.length;
 
}

//returns 2d array
var buildLattice = function(n) {
    var lattice = [];
    
    for (var i = 0; i <= n; i++) {
        lattice.push([]);
        for (var j = 0; j <= n; j++) {
            lattice[i][j] = [i, j];
        }
    }
    return lattice;
}