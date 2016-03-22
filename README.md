## Algorithms with TDD

This repo is dedicated to problem solving in ES5. TDD courtesy of Mocha and Chai.

### Toy problems completed

- [x] Anagrams
- [x] largest binary gap
- [x] binary search
- [x] bubble sort
- [x] character frequency in an array
- [x] coin sum: given n, how many combinations sum up to n from array of numbers
- [x] common ancestor: getClosestCommonAncestor for tree class
- [x] common chars in both strings
- [x] even occurrence: first thing that occurs even number of times
- [x] fibonacci: iterative and recursive
- [x] insertion sort
- [x] is array subset
- [x] linkedlist has cycle
- [x] longest palindrome
- [x] lattice paths
- [x] tree map
- [x] max words in sentence
- [x] merge sort
- [x] quick sort
- [x] return the first non-repeating character
- [x] number to english
- [x] isPrime
- [x] rock-paper-scissors
- [x] roman numeral translator
- [x] selection sort
- [x] sorted array to binary search tree
- [x] spiral matrix traversal
- [x] string permutations
- [x] sum contiguous array
- [x] telephone words
- [x] equilibrium index
- [x] whole squares in range


TODO:

- [ ] async map
- [ ] binary search array
- [ ] rotate matrix

Additional TODO:

- [ ] Quick sort
- [ ] string combinations
- [ ] string permutations
- [ ] cartesian product
- [ ] power set
- [ ] implement fibonacci recursively, dynamically, and iteratively
- [ ] implement factorial recursively, dynamically, and iteratively
- [ ] implement the Towers of Hanoi with 3 towers and N disks
- [ ] find all permutations to represent n cents, given 1, 5, 10, 25 cent coins
- [ ] print all valid combinations of n-pairs of parentheses
- [ ] Sort an array of strings so all anagrams are next to each other
- [ ] Determine if a string contains unique characters
- [ ] Determine if a string is a permutation of another
- [ ] Determine if a string is a rotation of another
- [ ] Reverse characters in a string
- [ ] Remove specified characters in a string


- [ ] Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.
- [ ] Given an array, find the length of the longest increasing sequence.
- [ ] Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

### Common functional programming methods

#### Collections

- first
- last
- each
- indexOf
- filter
- reject
- uniq
- map
- pluck
- reduce
- contains
- every
- some
- shuffle
- invoke
- sortBy
- zip
- flatten
- intersection
- difference

#### Objects

- extend
- defaults

#### Functions

- once
- memoize
- delay
- throttle

### Time Complexity of sorting Algs

 | Worst | Best | Average |
--- | --- | --- | --- | --- |
Selection Sort | O(n^2) | O(n^2) | O(n^2) |
Insertion Sort | O(n^2) | O(n) | O(n^2)  |
Merge Sort | O(nlogn) | O(nlogn)  | O(nlogn) |
Quick Sort | O(n^2) | O(nlogn) | O(nlogn) |
Binary Search | O(logn) | O(1) | O(logn) |

### Space Complexity

 | Worst | Best | Average |
--- | --- | --- | --- | --- |
Selection Sort | O(n) | |  |
Insertion Sort | O(n)|  |  |
Merge Sort | O(n) |   |  |
Quick Sort | O(n) |  |  |
Binary Search | O(1) |  |  |

### Additional resources

- [All the problems](http://www.programcreek.com/2012/11/top-10-algorithms-for-coding-interview/)
- [JavaScript implementations of different Computer Science algorithms](https://mgechev.github.io/javascript-algorithms/index.html)

### Forking

```
$ git clone https://github.com/polinadotio/this-project.git
$ git checkout -b my-branch origin/new-branch
$ open SpecRunner.html
```


for most array types, an insert at the end is O(1) amortized (amortized because most arrays have some free space allocated at the end - but if you're out of free space you will need to allocate and copy the array)

insert at the start would probably be O(n), since you probably need to move all of the elements over after the insert

though the insert vs append distinction is worth keeping in mind

arrays have O(1) random accesses but O(n) inserts, whereas linked lists will have O(n) random accesses but O(1) inserts.

one general problem with linked lists is that since nodes tend to be allocated independently you'll have poor locality of memory and thus poor caching behavior. lists often if you access element i you'll want to access element i+1, and memory loads usually load words (a few bytes) at once so accessing i+1 would be a cache hit with regular arrays but probably not for linked lists

