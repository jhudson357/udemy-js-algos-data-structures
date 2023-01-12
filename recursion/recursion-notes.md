**RECURSION**
- A process (a function in our case) that calls itself

**How recursive functions work**
- Inovke the same function with a different input until you reach your base case
- Base case
  - the condition when the recursion ends
  - THIS IS THE MOST IMPORTANT CONCEPT TO UNDERSTAND

**Two essential parts of a recursive function**
- base case
- different input

**Where things go wrong**
- No base case
- Forgetting to return or returning the wrong thing
- Stack overflow (call stack size exceeded)

**Helper method recursion**
- Two functions (outer function and function within)

**Pure recursion tips**
- For arrays, use methods like *slice, the spread opeeratio, and concat* that makes copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like *slice, substr, or substring* to make copies of strings
- To make copies of objects use *Object.assign, or the spread operator*