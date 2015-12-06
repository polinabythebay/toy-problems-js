### Making Change

This article is meant for folks who may not necessarily know about programming or computer science, but are hoping to learn why this field is interesting and rewarding. I previously thought computer science was about 'hacking' and staring at computer screens all day in a boring fashion, but it's about really interesting applied math concepts. 

A discussion on computer science concepts and topics as applied to real world problems.

Here is a real world scenario:

You give the cashier at Trader Joes a $20 and for $15 in groceries. You expect $5 back. How might they give you that back in change?

We have a couple possibilities.

- $10
- $5
- $1
- 1, 5, 10, 25 cents

Your intuition says they should give you a $10 and a $5. But they could also give you 3 $5s, or 1 ten and 5 ones. This makes for an interesting algorithm to solve.

Given a dollar amount, how many ways could someone make change? First you ask yourself, what are my inputs and outputs? 

How can a given amount of money be made with the least number of coins of given denominations?

Input: an array of integers (non-zero) representing currency denominations
Output: an integer that represents the number of ways to make change.

You could also have a slightly different problem:

Output: an array of solutions, where each solution shows how many of each currency you need to make that solution. The size of the array represents the number of ways to make change.

### Generating the number of ways to make change

This is the easiest problem. We need to count how many ways we can make change. The first step in developing an algorithm is to define the space of outputs and inputs. We've done that, so the next step is to walk through a solution using a small example.

Given this array of coin denominations:

[1,2,5]

How many ways to make change?

1 - 1,1,1,1,1
2 - 1,1,1,2
3 - 1,2,2
4 - 5

Four ways.

When you hand out change, you start at $5, hand them a $1, then start at $4, hand them another $1. If we sorted our array from largest to smallest:

[5,2,1]

Our procedure could be as follows:

- Start at $5 to make change, hand them a $5. subtract $5 from our initial amount.
- check if we still need to make change. Since 5-5=0, we do not need to make change. That means we have one solution! Tally up 1 solution.

- Start at $5 to make change, hand them a $2. subtract $2 from our initial amount. 
- Check if we still need to make change. since 5-2=3, and 3 > 0, we do need to make change.
- Start at $3, hand them $2. 
- Start at $1, hand them $2. that won't make change, so let's backtrack.
- Start at $1, hand them $1. that makes change! tally our counter.

What is our counter? 4! Great! Okay let's do that in Javascript. 

<script src="https://gist.github.com/polinadotio/59ae053f208f8863018c.js"></script>

### Generating all combinations of making change

This is a tad bit harder problem:


Code for this:

<script src="https://gist.github.com/polinadotio/329ebc818695736c17f5.js"></script>

### Returning the optimal (minimum combination) for making change.

If the input was [1,3,4] and you're trying to make 6, the greedy algorithm would start with the largest and would return 4,1,1 as the optimal way of making change. We want to return the minimum combination of making change (3,3) which is what we consider the optimal number.

The techniques we'll use involve dynamic programming.

Techniques:

- recursion
- dynamic programming
- NP complete 
- modulo
- greedy way

Optimizations:

- Time/Space complexity
- Minimum number of dollar bills

This problem is a [knapsack type problem](https://en.wikipedia.org/wiki/Knapsack_problem). The Knapsack problem is:

Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.

This is known as a [combinatorial optimization](https://en.wikipedia.org/wiki/Combinatorial_optimization), a topic in applied mathematics. This is when one is trying to find an optimal object from a finite set of objects. 

Resources

- [Wikipedia: Change Making problem](https://en.wikipedia.org/wiki/Change-making_problem)






