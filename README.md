# ALGORITHMS AND DATA STRUCTURES CLASS

## BIG O NOTATION
When writing code, there are measurements/standards that are usually considered to determine how efficient that piece of code is:

* How fast is it? - time complexity
* How memory-intensive is it? - space complexity
* The level of readibility.

The above yardsticks differ in various circumstances, from one computer to another, and even on the same computer as well. Therefore, Big O Notation provides a better way of analysing how efficient an algorithm is. Simply put, Big O analyses how the runtime or memory-usage of an algorithm increases relative to the inputs to that algorithm. Big O does not care about precision of the inputs, only the general trend of the relationship between the input and the runtime/space complexity being analysed - as either constant, linear or exponential. The following are levels of algorithm complexity in ascending order.

- O(1) = constant complexity
- O(log n) = constant logarithmic complexity
- O(n) = linear complexity
- O(n log n) = linear logarithmic complexity
- O(n^2) = exponential complexity

### Time Complexity
*How fast?* Instead of analysing a logarithm by the amount of time it takes to run, it is better to use *the number of operations* contained in each code. For example, a one-liner statement that uses a few mathematical operations to derive an output, would be much more efficient than a loop, because the number of operations required to run the loop increases exponentially or proportionally to the value of n i.e. the number of iterations.

1. `O(1)` An algorithm has a runtime of O(1) if the number of operations required to execute remain constant as n grows. This is usually the case with a one-line expression with a few mathematical operations.
2. `O(n)` If the number of operations required grow in proportion to the input n, then the algorithm has O(n). This is the case with a loop, where the number of times the code block is executed increases as the number of iterations - n - increases. **A linear relationship** between input and runtime involving a roughly proportionate increase.
3. `O(n^2)` When the number of operations increase by n^2, then we have a O(n^2). This is the case for a two-level nested loop. This is an **exponential/quadratic curve relationship**, where runtime increases by n^2.

Rules of Thumb for analysing time complexity of algorithms:
- Constants don't matter. O(2n) is the same as O(n), O(500) is the same as O(1).
- Smaller terms don't matter. O(n + 10) is the same as O(n).
- Arithmetic operations are constant.
- Variable assignments are constant.
- Accessing elements in an array is constant.
- The complexity of a loop is defined as the length of the loop multiplied by the complexity of the operations within the loop.

### Space Complexity
Auxiliary space complexity is the focus of Big O i.e. the amount of memory taken up by the algorithm itself, not including the inputs. Rules of thumb for analysing space complexity in Javascript are:
- The primitive types numbers, booleans, undefined and null occupy O(1) space.
- The primitive type string, occupies O(n) space.
- Reference types - arrays and objects - occupy O(n) space, where n is the length of an array, or the number of keys in an object respectively.

### Analysing Performance of an Object
Objects contain unordered fields stored in key-pair values. Operations performed on them generally have less time complexity than arrays.
* Adding a property to an object requires constant time - O(1)
* Removing a property requires constant time - O(1)
* Retrieving a property requires constant time - O(1)
* Searching for a property requires linear time - O(n)
* Prototype methods (`Object.keys`, `Object.values`, `Object.entries`) require linear time
* Prototype properties (such as `Object.hasOwnProperty`) require constant time.

### Analysing Performance of an Array
Arrays contain ordered items with indexes identifying the position of each item. Time complexity depends on the position of the item an operation is being performed on, in some cases. Arrays are best avoided if specific ordering of items in a list is not needed.
* Adding and removing an item (`push()` and `pop()`) to the end of an array requires constant time - O(1)
* Adding and removing (`shift(`) and `unshift()`) at the beginning or middle of an array requires linear time - O(n). This is because all the subsequent items in the array have to be re-indexed, and the number of operations it takes to do this grows in proportion with the length of the array.
* Retrieving an item via indexing requires constant time - O(1)
* Searching for an item requires linear time - O(n)
* Other Array methods such as `slice()`, `splice()`, `concat() `and `forEach()`, `reduce()` etc all require linear time - O(n)
* `sort()` on the other hand, requires logarithmic linear time - O(n log n), because apart from performing an operation on each array item, items also have to be moved around to different positions.

## PROBLEM SOLVING APPROACH
An algorithm is simply a set of operations used to solve a problem. The following steps are useful for problem-solving:
- Understand the problem
- Explore concrete examples
- Break it down
- Solve and simplify
- Look back and refactor

1. Understand the Problem
    a. Restate it in your own words, for better understanding.
    b. What inputs should go into the problem.
    c. What outputs should be derived from the solution.
    d. label different parts of the solution
2. Explore concrete examples
    - Draft a rough example of what the function should look like, with a function name, possible inputs and outputs, considering their types as well.
3. Break it down
    - Divide the implementation into different logical parts, what variables should be defined, what mathematical operations should be performed, and what object should be returned from the function.
4. Solve or Simplify
    - Solve the problem by filling in all the different parts.
5. Look Back and Refactor
    - Look for better ways of implementing what you have done.

## PROBLEM SOLVING PATTERNS
- **Frequency Counters**: This is a pattern where objects and arrays are used to collect values and compare them. The efficient approach for this is to use two separate loops to loop over each array being compared. This would have linear time - O(n). The less efficient approach would be to use nested loops which would have a O(n^2) complexity - quadratic time.
- **Multiple Pointers**: This pattern involves creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. Useful for solving problems to derive minimal space complexity.
- **Sliding Window**: This pattern involves creating a window which could be an array, or a number from one position to another. The window increases and closes based on specified conditions, and another window created. This pattern is useful for keeping track of a subset of data in an array or string.
- **Divide and Conquer**: This pattern involves dividing a dataset into different chunks and performing a defined operation on each one separately. This is a valuable pattern for decreasing time complexity considerably. For instance, doing a binary search using this pattern has a time complexity of O(log n) instead of using a loop to iterate and find the item which has O(n).