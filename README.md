# ALGORITHMS AND DATA STRUCTURES CLASS

## BIG 0 NOTATION
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