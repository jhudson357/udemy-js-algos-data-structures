**Big O**
- it allows us to talk formally about how the runtime of an algo grows as the input (n) grows
*- Talking about the worst case scenario*

We say that an algo is O(f(n)) if the number of simple operation the computer has to do is eventually less than a constant times f(n), as n increases
- f(n) could be *linear* (f(n) = n)
- f(n) could be *quadratic* (f(n) = n^2)
- f(n) could be *constant* (f(n) = 1)
- f(n) could be something entirely different

O(n) operation inside of an O(n) operation is O(n^2)  --> This would be a nested loop

**Simplifying Big O Expressions**
- Constants dont matter
  - O(2n) --> O(n)
  - O(500) --> O(1)
  - O(13n^2) --> O(n^2)
  - O(n+10) --> O(n)
  - O(1000n + 50) --> O(n)
  - O(n^2 + 5n + 8) --> O(n^2)

**Big O Shorthands**
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the lenght of the loop times the complexity of whatever happens inside of the loop

________________________________________________

**Space Complexity**
- So far, we've been focusing on *time complexity*: how can we analyze the runtime of an algo as the size of the inputs increases?
- We can also use big O notation to analyze *space complexity*: how much additional memory do we need to allocate in order to run the code in our algo?

**Rules of thumb**
- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types (arrays, objects) are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

________________________________________________

**Logarithms**
- A logarithm is the inverse of exponentiation
- Logarithmic time complexity (O(log n)) is great (only slighly worse than O(1))

*Who cares?*
- Certain searching algos have logarithmic complexity
- Efficient sorting algos involve logarithms
- Recursion sometimes involves logarithmic space complexity

________________________________________________

**RECAP**
- To analyze the performance of an algo, we use Big O notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algo
- Big O Notation doesnt care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algo, not the hardware used to run the algo
