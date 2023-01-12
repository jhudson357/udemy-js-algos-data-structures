// SLIDING WINDOW

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.


// Naive solution
// Time complexity - O(N^2)
function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
// console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
// console.log(maxSubarraySum([4,2,1,6],1)) // 6
// console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
// console.log(maxSubarraySum([],4)) // null


// Refactor
// Time complexity - O(N)

function maxSubarraySum2(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSubarraySum2([1,2,5,2,8,1,5],2)) // 10
// console.log(maxSubarraySum2([1,2,5,2,8,1,5],4)) // 17
// console.log(maxSubarraySum2([4,2,1,6],1)) // 6
// console.log(maxSubarraySum2([4,2,1,6,2],4)) // 13
// console.log(maxSubarraySum2([],4)) // null


// _____________________________________________
// _____________________________________________

// EXERCISE 7 (Section 6)

// Given an array of integers and a number, write a function called maxSubarrySum which finds the maximum sum of a subarray with the length of the number passed to the function. 
// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

function maxSubarraySum(arr, length) {
  let maxSum = 0
  let tempSum = 0
  if(arr.length < 3) return null
  for (let i=0; i<length; i++) {
    maxSum += arr[i]
    // console.log('maxSum ' ,maxSum)
  }
  tempSum = maxSum
  for(let i=length; i<arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i-length]
    if(tempSum > maxSum) {
      maxSum = tempSum
    }
  }
  return maxSum
}

// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // null


// _____________________________________________
// _____________________________________________

// EXERCISE 8 (Section 6)

// Write a function called minSubarrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(nums, sum) {
  let total = 0
  let start = 0
  let end = 0
  let minLen = Infinity

  while (start < nums.length) {
    if(total < sum && end < nums.length) {
      total += nums[end]
      end++
    } 
    else if(total >= sum) {
      minLen = Math.min(minLen, end-start)
      total -= nums[start]
      start++
    }
    else {
      break
    }
  }
  return minLen === Infinity ? 0 : minLen

}

// console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0


// _____________________________________________
// _____________________________________________


// EXERCISE 9 (Section 6)

// Write a function called findLongestSubstring which accepts and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
  let longest = 0
  let seen = {}
  let start = 0

  for(let i=0; i<str.length; i++) {
    let char = str[i]
    if(seen[char]) {
      start = Math.max(start, seen[char])
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1)
    // store the index of the next char so as to not double count
    seen[char] = i + 1
  }
  return longest
}


console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6

