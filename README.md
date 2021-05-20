# ALGORITHMS AND DATA STRUCTURES CLASS

## ALGORITHMS

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
- O(n^2) = quadratic complexity
- O(2^n) = exponential complexity

### Time Complexity
*How fast?* Instead of analysing a logarithm by the amount of time it takes to run, it is better to use *the number of operations* contained in each code. For example, a one-liner statement that uses a few mathematical operations to derive an output, would be much more efficient than a loop, because the number of operations required to run the loop increases proportionally to the value of n i.e. the number of iterations.

1. `O(1)` An algorithm has a runtime of O(1) if the number of operations required to execute remain constant as n grows. This is usually the case with a one-line expression with a few mathematical operations.
2. `O(n)` If the number of operations required grow in proportion to the input n, then the algorithm has O(n). This is the case with a loop, where the number of times the code block is executed increases as the number of iterations - n - increases. **A linear relationship** between input and runtime involving a roughly proportionate increase.
3. `O(n^2)` When the number of operations increase by n^2, then we have a O(n^2). This is the case for a two-level nested loop. This is a **quadratic curve relationship**, where runtime increases by n^2.

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

## RECURSION
`Recursion` is a function calling itself. Some methods such as JSON.parse, JSON.stringify, document.getElementById are recursive functions. Recursion is usually a better alternative to iteration. A recursive function has two essential parts:
* The base case - The point at which the function stops calling itself.
* The variable inputs - The different inputs which are passed into the function each time it is called.

A `recursion helper method` is an outer function that wraps the recursive function. This makes it possible to create variables within the outer function scope that help the recursive function carry out its duty. For example, an array can be defined which the RF will use to collect items. Using a helper method is more straightforward and easier to understand than `pure recursion` that contains all its variables within its scope.

When using the pure recursion approach, the strategy is to find a way to collect items by using methods such as 
- slice, concat, or the spread operator to make copies of the collecting array before it is reset to an empty array. 
- For strings, slice, substr or substring are used to make copies of the string, 
- while for objects, Object.assign or the object spread operator is used.

## SEARCHING ALGORITHMS
### Linear Search
Javascript has inbuilt methods for searching arrays such as `indexOf()`, `includes()`, `find()`, `findIndex()`, and these are implemented behind the scenes by looping through the array one item at a time till a match is found. This type of search is called a linear search and is most suitable for when the items in the array are not sorted in any particular order. As the name implies, it has linear time complexity - O(n).

### Binary Search
Binary search is much faster than linear search, because instead of eliminating one item at a time through a loop, half of the data being searched is eliminated at a time. If the item being searched for is projected not to be in a particular half, that half is eliminated, and the remaining half is further divided into two, until a match is found, or not. This uses the *Divide and Conquer* algorithm pattern. Binary search is applicable only for sorted arrays. It has a time complexity of O(log n), or best case, O(1), if the item is found on the first loop. **O(log n) means that as the size of the array (which is `n`) doubles, the number of operations required for the search only increases by one**: a logarithmic relationship. If the length of the array is 16, 4 operations would be required. When it doubles to 32, 5 operations (one more) are needed. Therefore, in base 2, log 16 = 4 and log 32 = 5.

## SORTING ALGORITHMS
The in-built `sort()` method is available in Javascript, but we need to know how it works behind the scenes. Also, it may not be the most efficient in cases where our data is somewhat ordered but not completely sorted, it may be more efficient to use custom sorting algorithms to achieve maximum time efficiency. There are about 15 different sorting algorithms which have their own uses cases in which they work best.

### Elementary Sorting Algorithms
* **Bubble Sort**: This algorithm works by bubbling the larger numbers to the top. It compares two items at a time, and if the item being bubbled is greater, it swaps places with the item before it and continues till it is sorted in place. It generally has O(n^2) time complexity because it uses nested loops. It can be optimised by breaking out of the loop when sorting is complete, thereby reducing the number of iterations. This can reduce complexity to O(n).
* **Selection Sort**: Selection sort functions by swapping the smallest items to the beginning of the array. It also uses a nested loop and has O(n^2) time complexity. It is more efficient than bubble sort, because it does not swap items during the iteration, only at the end of the iteration when a minimum value has been established.
* **Insertion Sort**: Insertion sort gradually builds up a sorted portion of the array, taking an item from the unsorted portion and inserting it into its right place in the sorted portion. It also has O(n^2) time complexity. It is really efficient for use cases when the array is being updated with live data, and each new item needs to be sorted in place.

### Intermediate Sorting Algorithms
* **Merge Sort**: Merge sort is implemented by splitting an array into two subarrays, and then sorting and merging the arrays together to return a new, single sorted array. This is done recursively. A helper function is used to do the merging. It has O(n log n) time complexity, which means its super faster than the elementary logarithms mentioned above. `As the size of n (array length) doubles, the number of array splits done increases by 1, that is O(log n). Then as the size of n grows, the number of comparisms done between the items (using the merge helper function) grows proportionally, that is O(n). Therefore both analyses combined together yields O(n log n).` It's suitable for large arrays. However, it takes up more space than the elementary sort algorithms - O(n).
* **Quick Sort**: Also uses the same concept as merge sort in working on two different portions of an array at a time. Here, a helper function is used to move items to their right position in an array. The index of the swapped item is defined as a pivot. All numbers less than the pivot are moved to its left. The process is repeated recursively until all the numbers are sorted **in place**. Note that this method does not return a new array.

### Non-comparisms Sorting Algorithms
* **Radix Sort**: All the previous algorithms perform sorting operations by comparing one item to another. Radix sort does not do any comparisms, but rather repetitively groups numbers by the value and positions of each digit they contain.

## DATA STRUCTURES
Data structures are collections of values, the relationships among them, and the operations or methods that can be applied to that data. It is important to know how to define custom data structures, as the built-in ones may not be sufficient for data requirements.

### Lists
* **Singly-Linked Lists**: This is a list of items just like an array, but unlike an array, there is no indexing of the items. Each item is stored in a node, which is linked or points to the next item in the list. SLLs are defined with a head (first item) and a tail (last item), and also a length. Items cannot be accessed randomly (via indexing), getting, inserting or deleting a particular item involves looping through the list from the beginning. SLLs are mostly useful for very large datasets that do not need frequent random access, but do a lot of insertion and deletion tasks. Since there is no indexing, items do not have to be re-indexed every time. Insertion and deletion of items at the beginning of an array takes O(1) time complexity. This is basically the advantage an SSL has over the built-in Javascript array.
* **Doubly-Linked Lists**: These are similiar to SLLs, but each node points to the previous item, as well as to the next item. This makes it faster to perform operations at the end of a list, as the loop can start from the end, as well as the beginning of the list. It uses up more memory than a SLL, but the benefits accrued are definitely huge. Searching with DLLs can be reduced to half the time, because searching is done starting from the beginning or the end depending on the position of the item. Such that O(n / 2), which essentially is still o(n).

### Stacks and Queues
These are different types of collection of data. A stack uses a LIFO structure, while a Queue uses a FIFO structure. 
* Stacks are used to manage function invocations (the Javascript call stack), the history object in routing, and undo/redo actions are implemented with a stack. A basic, built-in implementation of a stack with an array is to use the methods push() and pop() to add to and remove items from the end of a stack. A linked list can be used to add to and remove items from the beginning of a stack.
* Queues are used to manage print queues, background tasks. A queue is implemented with a Javascript array by using the unshift() and pop() methods to add items to the beginning of an array and remove them from the end. A singly linked list can be used to add items to the end of a stack (`enqueue`) and remove them from the beginning (`dequeue`).
Adding and removing from stacks and queues which have been optimally defined, take O(1) - constant time.

### Binary Search Tree
Trees are non-linear data structures containing a collection of nodes having a parent-child relationship. There is only one root, and there are no connections between sibling nodes, else it is not a tree. Tree terminology:
    1. A root - The top node in a tree
    2. A child
    3. A parent
    4. A sibling
    5. A leaf - a node with no child.
    6. An edge - the connection between two nodes.
Trees have lots of use cases in programming: The HTML DOM, computer folder structuring, network routing etc.

A binary search tree (BST) consists of nodes, for which each node can only have at most two children. BSTs contain data sorted in a particular order (as opposed to regular binary trees whose data is not sorted in any particular order). Any node that has a lesser value than the parent node is located to the left, while the one with a higher value is located to the right. This makes searching for a particular value easier with binary search. Time complexity for a BST is O(log n); as the number of nodes double, the number of operations carried out increases by 1. However, if the tree is a one-sided tree, with each node having only one child, the worst case is O(n). In this situation, the advantage of using a tree is lost, and its better to use a list instead.

Traversing a tree - moving from one node to another - can be done in a number of ways:
1. Breadth First Search: Involves moving sideways and down through the tree. A queue is used to implement the logic, to keep track of the items being visited as the tree is being traversed, and an array returned to show the items in the order they were visited.
2. Depth First Search
    - Pre-Order: in a DFS pre-order, starting with the root, the left side of each node is visited first, before visiting the right side. This is accomplished with recursion. This is mostly useful for copying a tree for reconstruction later.
    - Post-Order: Here the nodes are visited starting from the bottom left of the tree, then right, and then traversing upwards to finish with the root.
    - In-Order: Nodes are visited starting from the bottom left, followed by the root, and then finishing up with the right side. This approach is useful for getting items from a Binary Search Tree in their exact order.

BFS and DFS both have O(n) time complexity, but space complexity differs based on how wide or deep the tree is, which would determine the most efficient out of the two.

### Binary Heaps
These are similar to trees but with a few different characteristics. In a binary heap, all the left child nodes are filled out first, before the right ones, and it is as compact as possible. Binary heaps are used for making Priority Queues, as well as Graph Traversals. There are mainly two types:
* Max Binary Heap: 
    - In this heap, the parent nodes are always larger than the child nodes. 
    - Each parent has at most, two child nodes.
    - No defined relationship between sibling nodes.
* Min Binary Heap: The parent node is always smaller than the child nodes.

The way a heap works, is that it is flattened and stored in an array, with defined indices (no nodes are created). For any parent node with the index of n, the left child is stored at index 2n + 1, while the right child is stored at index 2n + 2. Also, for any child node, the parent is stored at `Math.floor((n - 1)/2)`.

To insert into the queue, the item is pushed to the end of the array, and then bubbled-up to its appropriate position in the heap. For removal, the root is shifted from the queue, the last item is swapped to the root position, then sunk-down to its appropriate position.

### Priority Queue
This is a data structure where every element is assigned a priority level, and those with higher priorities are removed from the queue first. It can be implemented with an array or a linked list, but it would not be the best, because this would yield a time complexity of O(n). A heap is more ideal for implementing a PQ, because it has a logarithmic time of O(log n). A Min Binary Heap is used, because a lower number has a greater priority over a higher number.

### Hash Tables/Maps
A hash table is a data structure that stores data in key-value pairs. Every programming language has its own built-in implementation of a hash map; Javascript has objects, Python has dictionaries etc. Virtually all operations carried out with a hash map are fast and efficient.

To look up a value using a key, that key needs to be converted into an index that represents that value. A **hash function** is used to make this conversion. A basic hash function takes in data (key) of arbitrary sizes and always outputs a number (index) of a fixed size. A gpod hash function (for hash table purposes) should hash different data types, should operate with constant time O(1) and should distribute the numbers outputted uniformly to avoid collisions. Using prime numbers in the calculations helps to prevent collisions. When there are collisions, two different approaches are used to solve them:
- Separate Chaining: the keys with the same index are stored at the same position, in a nested structure, within the same container (object or array, depending on what's being used) and looped over whenever an item needs to be retrieved from that same index.
- Linear probing: if an index has already been assigned to a key, the next available index is located and assigned to the colliding key.
Hash tables generally have constant time O(1) for adding, removing and accessing key-value pairs.

### Graphs
Graphs are a group of nodes with connections between them. In contrast with a tree, a graph does not have any root node, nor is there any parent-child relationship between the nodes. The nodes are connected in any haphazard, random way possible. Also, a tree which is in theory, also a graph, only has one pathway from one node to another. Vertices on a graph have multiple pathways from one node to another. Graphs are used for social networks, mapping, routing and so many other applications.
Graph Terminology:
- Vertex: A name for a node on the graph
- Edge: A connection between one vertex and the other.
- Undirected Graph: In this type of graph, there is a two-way connection between two vertices. Facebook friendships are an example.
- Directed Graph: Here, there is a specified one-way connection between vertices, depicted with an arrow, showing the direction of the relationship. Instagram or twitter followership is an example here. It becomes a two-way relationship only if two people are following each other.
- Weighted Graph: The edges are assigned a value. For a map, this would be the distance between two locations. In an unweighted graph, the edges have no value.
Graphs are stored using either an Adjacency Matrix, or an Adjacency List. The latter can be improved upon by using strings as keys (hash table) instead of indexes, and store the adjacent values in an array. For storing and traversing the vertices, an AL is more efficient. For querying edges, an AM is more efficient.

Graph Traversal is done using Depth First Search or Breadth First Search. As already seen with trees, either method is used depending on how compacted the graph is in its depth or breadth.

### Dijkstra's Algorithm
Edsgar Dijkstra was a Dutch programmer who pioneered, influenced and created new disciplines in Computer Science and is known for a lot of algorithms, the most popular and widely used of which is the Disktra's Algorithm.

The algorithm finds the shortest path from one point to another. On a graph, this is the shortest combination of edges between two vertices. This algorithm is applicable in everyday life in the form of GPS routing, network routing, airline ticketing (shortest route to your destination) etc.

## DYNAMIC PROGRAMMING
Is an approach developed by Richard Bellman for solving some specific complex problems by breaking down a problem into simpler subproblems, solving those problems **only once** and storing their solutions. 
**Features of dynamic programming (when should it be used?)**:
- **Over-lapping Subproblems**: The first use case for dynamic programming is where the subproblems are overlapping, i.e. they are calculated over and over again. A good example where this would be applicable is with a fibonnaci sequence implemented recursively, where a set of two numbers are summed up more than once. As n grows, the number of times the function is called grows exponentially O(2^n). To solve this with dynamic programming, would be to store the solution for one fibonnaci sequence in a variable, and when it is needed, reference is simply made to that variable, instead of calculating it over again. This process is called **memoization**. An example which does not need dynamic programming is the merge sort, using the divide and conquer pattern. Each array broken down is unique and there is no repetition.
- **Optimal Substructure**: A problem has an optimal substructure when the optimal solution for it can be derived from a combination of the optimal solutions for its subproblems.

Memoization is the process of storing the results of expensive function calls and returning the cached result when the same inputs occur again. Implenting recursion with memoization drastically improves time complexity from exponential time - O(2^n) to linear time - O(n).

Tabulation, on the other hand is a bottom-up approach, implemented non-recursively. An array stores the results of each fibonnaci sequence. The array is looped over and the two previous results are added together to give the current fibonnaci value.