/*************************************************************
Given 2-dimensional array (that is, an array containing many 
same-length arrays), print out every value found, but in a 
spiral from the upper left in to the center.
**************************************************************/


/*************************************************************
Testing
**************************************************************/

var arrs1 = 
[ [ 1, 2, 3 ], 
[ 4, 5, 6 ], 
[ 7, 8, 9 ], 
[ 10, 11, 12 ], 
[ 13, 14, 15 ], 
[ 16, 17, 18 ], 
[ 19, 20, 21 ], 
[ 22, 23, 24 ] ];

var arrs1_output = [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ];

var arrs2 = 
[ [ 1, 2, 3, 4, 5 ], 
[ 6, 7, 8, 9, 10 ], 
[ 11, 12, 13, 14, 15 ], 
[ 16, 17, 18, 19, 20 ], 
[ 21, 22, 23, 24, 25 ] ];

var arrs2_output = [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]

var arrs3 = [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ];

var arrs3_output = [ 1, 2, 3, 4 ];

var arrs4 = [ [ 1, 2, 3, 4, 5, 6, 7 ] ];

var arrs4_output = [ 1, 2, 3, 4, 5, 6, 7 ];

/*************************************************************
//input 2 dimensional array
//four operations: up, right, down, left
**************************************************************/

var spiralTraversal = function(matrix) {

  var result = [];
  var rightLimit = matrix[0].length;
  var downLimit = matrix.length;
  var leftLimit = -1;
  var upLimit = 0;

  //begin by going right
  right(0,-1,rightLimit);

  return result;
    
  function right(lastIndexRow, lastIndexCol) {
    var indexRow = lastIndexRow;
    var indexCol = lastIndexCol+1;
    while(indexCol < rightLimit) {
      result.push(matrix[indexRow][indexCol]);
      indexCol++;
    }
    rightLimit--;
    indexCol--;

    if(indexCol !== lastIndexCol) {
      down(indexRow,indexCol,downLimit); 
    } else {
      return;
    }
  }

  function down(lastIndexRow, lastIndexCol) {
    var indexRow = lastIndexRow+1;
    var indexCol = lastIndexCol;

    while(indexRow < downLimit) {
      result.push(matrix[indexRow][indexCol]);
      indexRow++;
    }
    downLimit--;
    indexRow--;

    if(indexRow !== lastIndexRow) {
      left(indexRow, indexCol, leftLimit);
    } else {
      return;
    } 
  }

  function left(lastIndexRow, lastIndexCol) {
    var indexRow = lastIndexRow;
    var indexCol = lastIndexCol-1;

    while(indexCol > leftLimit) {
      result.push(matrix[indexRow][indexCol]);
      indexCol--;
    }
    indexCol++;
    leftLimit++;

    if(indexCol !== lastIndexCol) {
      up(indexRow, indexCol, upLimit);
    } else {
      return;
    }
  }

  function up(lastIndexRow, lastIndexCol) {
    var indexRow = lastIndexRow-1;
    var indexCol = lastIndexCol;

    while(indexRow > upLimit) {
      result.push(matrix[indexRow][indexCol]);
      indexRow--;
    }
    indexRow++;
    upLimit++;

    if (indexRow !== lastIndexRow) {
      right(indexRow, indexCol, rightLimit);
    } else {
      return;
    }
  }
}

