**MERGE SORT**

**Why use merge sort?**
- Bubble sort, insertion sort, and selection sort are very slow with large data sets
- Merge sort is MUCH faster

**Time complexity**
- There is a family of sorting algos that can improve time complexity from O(N^2) to O(n log n)
- There's a tradeoff between efficiency and simplicity
- The more efficient algorithms are much less simple, and generally take longer to understand

**MERGE SORT**
- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

**MERGING ARRAYS**
- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
- This function should run in *O(n + m)* time and *O(n + m)* space and *should not* modify the parameters passed to it.

**Bif O of mergeSort**
- Time Complexity (Best) - O(n log n)
- Time Complexity (Average) - O(n log n)
- Time Complexity (Worst) - O(n log n)
- Space Complexity - O(n)
- ***This is the best time complexity you can get for a sorting algorithm