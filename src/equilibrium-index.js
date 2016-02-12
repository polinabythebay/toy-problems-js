/**
 * 
Task description

A zero-indexed array A consisting of N integers is given. An equilibrium index of this array is any integer P such that 0 ≤ P < N and the sum of elements of lower indices is equal to the sum of elements of higher indices.

Sum of zero elements is assumed to be equal to 0. This can happen if P = 0 or if P = N−1.
 * 
 * */

function solution(A) {
  var leftSum = [];
  leftSum[0] = 0;
  var rightSum = [];
  var totalSum = 0;
     
  //populate left sum and total sum
  for (var i = 1; i < A.length; i++) {

  //get total sum
    totalSum = totalSum + A[i];

  //populate left sum array 
    if (i === 1) {
      leftSum[i] = A[i -1];
    } else  {
      leftSum[i] = leftSum[i-1] + A[i-1];
    }

  }
    
    //next, populate the right sum
    for (var i = 0; i < A.length; i++) {
        
        if (i === 0) {
           rightSum[i] = totalSum; 
        } else {
          rightSum[i] = totalSum - A[i];  
          //update totalSum
          totalSum = totalSum - A[i];
        }
    }
    
    //next, return first index that has the same on the 
    //right and left
    //if you iterate through the entire thing, return -1
    
    for (var i = 0; i < leftSum.length; i++) {
        if (leftSum[i] === rightSum[i]) {
            return i;
        }
    }
    
    return -1;
}

solution([-1,3,-4,5,1,-6, 2, 1]);