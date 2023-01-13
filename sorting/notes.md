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