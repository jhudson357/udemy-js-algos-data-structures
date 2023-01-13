**Searching Algorithms**

**How do we search?**
- Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want. (this method is good for unsorted arrays - this is called *LINEAR SEARCH*)


**JavaScript has search!**
- There are many different search methods on arrays in JS
  - indexOf
  - includes
  - find
  - findIndex


**BINARY SEARCH**
- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- BINARY SEARCH ONLY WORKS ON SORTED ARRAYS

- Divide and Conquer - split array in half, then check if the desired value is greater than or less than the middle value. Eliminate the half that doesn't contain the desired value. Repeat until you find the desired value.


**Naive String Search**
- Suppose you want to count the number of times a smaller string appears in a longer string
- A straightforward approach involves checking pairs of characters individually