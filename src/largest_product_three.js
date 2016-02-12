/*************************************************************
Write a function that accepts an array of integers and returns 
the largest product possible from three of those numbers.
The array is not sorted

**************************************************************/

/*************************************************************
Strategies: 
1. n choose 3. generate all combinations of 3. return largest 
product among them

Time complexity: 
n choose k for any fixed constant k is Θ(nk), because it's equal to
n! / (k!(n - k)!) = n(n-1)(n-2)...(n-k+1) / k!
Which is a kth-degree polynomial in n with a nonzero leading coefficient.
O(n^3)

2. sort the array of numbers. find the max of the product of the
three largets numbers and the largest number and the two smallest
numbers (if they happen to be negative their product is positive)

Time complexity:
comparison based sorting algs require n log n in the worst case.
comparing the max of the largest and smallest is constant.
O(n log n)

3. do not sort the array of numbers. loop through it once
and find the three largest numbers and the two smallest 
numbers. find the max of the product of the largest three and
the product of the smallest two and the largest one.

Time complexity:
looping through the array is linear time.
comparing the numbers is constant.
O(n)
**************************************************************/