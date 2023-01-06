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

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null
