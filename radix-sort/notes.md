**RADIX SORT**

- Radix sort is a special sorting algorithm that works on lists of numbers
- It never makes comparisons between elements
- It exploits the fact that information about the size of a number is encoded in the number of digits.
- More digits means a bigger number!

**NOT A COMPARISON SORT --> INTERGER SORT!!!**

**Radix Sort Helpers**
- In order to implement radix sort, it's helpful to build a few helper functions first:
  - getDigit(num, place) - returns the digit in num at the given place value
  - digitCount(num) - returns the number of digits in num
  - mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list

**Big O for Radix Sort**
- Time Complexity (Best) - O(nk)
- Time Complexity (Average) - O(nk)
- Time Complexity (Worst) - O(nk)
  - n is number of things we're sorting, k is the length of those numbers (# of digits)
- Space Complexity - O(n + k)