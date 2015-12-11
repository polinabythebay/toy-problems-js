/*************************************************************
Given 2-dimensional array (that is, an array containing many 
same-length arrays), print out every value found, but in a 
spiral from the upper left in to the center.
**************************************************************/

//input 2 dimensional array
//four operations

var arrs = 
[ [ 1, 2, 3 ], 
[ 4, 5, 6 ], 
[ 7, 8, 9 ], 
[ 10, 11, 12 ], 
[ 13, 14, 15 ], 
[ 16, 17, 18 ], 
[ 19, 20, 21 ], 
[ 22, 23, 24 ] ];

var output = [ 1, 2, 3, 6, 9, 12, 15, 18, 
21, 24, 23, 22, 19, 16, 13, 
10, 7, 4, 5, 8, 11, 14, 17, 20 ];

var result = [];

//given last index, starts at next
//index to the right and keeps going right
//num times
var right = function(lastIndexRow, lastIndexCol, n) {
  var indexRow = lastIndexRow;
  var indexCol = lastIndexCol+1;
  while(indexCol < n) {
      console.log("position", arrs[indexRow][indexCol]);
      result.push(arrs[indexRow][indexCol]);
      indexCol++;
  }
  indexCol--;
  console.log("lastRow", indexRow, "lastCol", indexCol)
}


//starts at next index down and keeps going
//down n times
var down = function(lastIndexRow, lastIndexCol, n) {
   var indexRow = lastIndexRow+1;
   var indexCol = lastIndexCol;
   
   while(indexRow < n) {
      console.log("position", arrs[indexRow][indexCol]);
      result.push(arrs[indexRow][indexCol]);
      
      indexRow++;
   }
   indexRow--;
   console.log("lastRow", indexRow, "lastCol", indexCol)
}


//starts at next index to the left and keeps
//going left n times
var left = function(lastIndexRow, lastIndexCol, n) {
   var indexRow = lastIndexRow;
   var indexCol = lastIndexCol-1;
   
   while(indexCol > n) {
       console.log("position", arrs[indexRow][indexCol]);
       result.push(arrs[indexRow][indexCol]);
        indexCol--;
   }
   indexCol++;
    console.log("lastRow", indexRow, "lastCol", indexCol)
}

//starts at next index above and keeps 
//going up n times
var up = function(lastIndexRow, lastIndexCol, n) {
   var indexRow = lastIndexRow-1;
   var indexCol = lastIndexCol;
   
   while(indexRow > n) {
       console.log("position", arrs[indexRow][indexCol]);
       result.push(arrs[indexRow][indexCol]);
       indexRow--;
   }
   indexRow++;
   console.log("lastRow", indexRow, "lastCol", indexCol);
}

var spiralTraverse = function() {
    
    //go through right, down, left, right
    //update lastRow/lastCol
    //if previous row/col == next stopping row/col, then stop
    
    right(0,-1,arrs[0].length);
    down(0,2,arrs.length);
    left(7,2, -1);
    up(7,0, 0);
    
    right(1,0,arrs[0].length-1);
    down(1,1,arrs.length-1);
    
    left(6,1,0); //did nothing (if pair === previous pair, stop)

    
    console.log(result);
    
}

spiralTraverse();

