**QUICK SORT**

- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

**Pivot Helper (partition)**
1. In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
2. Given an array, this helper function should designate an element as the pivot
3. It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
4. The order of elements on either side of the pivot doesn't matter!
5. The helper should do this in place, that is, it should not create a new array
6. When complete, the helper should return the index of the pivot

**Picking a Pivot**
- The runtime of quick sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
- For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)

**Big O of Quicksort**
- Time Complexity (Best) - O(n log n)
- Time Complexity (Avg) - O(n log n)
- Time Complexity (Worst) - O(n^2)
- Space Complexity - O(log n)