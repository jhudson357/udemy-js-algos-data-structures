**SORTING**

**What is sorting?**
- Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
  - Sorting numbers from smallest to largest
  - Sorting names alphabetically
  - Sorting movies based on release year
  - Sorting movies based on revenue

**Telling JS how to sort**
- The built-in sort method accepts an otional comparator function
- You can use this comparator fxn to tell JS how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
  - If it returns a negative number, a should come before b
  - If it returns a postive number, a should come after b
  - If it returns 0, a and b are the same as far as the sort is concerned

**BUBBLE SORT**
- A sorting algo where the largest values bubble up to the top
- Should only use when your data is already nearly sorted
- TIME COMPLEXITY: O(N^2)
- SPACE COMPLEXITY O(1)

**SELECTION SORT**
- Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
- Not efficient - Time complexity = O(N^2)
- Only better than bubble sort if you want to minimize the number of swaps you're making
- TIME COMPLEXITY: O(N^2)
- SPACE COMPLEXITY O(1)

**INSERTION SORT**
- Builds up the sort by gradually creating a larger left half which is always sorted
- Insertion sort good for online algorithm (algo that can work as new data is coming in while already being sorted)
- Good for nearly sorted data
- TIME COMPLEXITY: O(N^2)
- SPACE COMPLEXITY O(1)