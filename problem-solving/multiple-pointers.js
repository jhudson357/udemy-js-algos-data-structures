// Multiple Pointers

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist


// Naive solution
// time complexity - O(N^2)
// space complexity - O(1)
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3] 
// console.log(sumZero([-2,0,1,3])) // undefined
// console.log(sumZero([1,2,3])) // undefined


// Refactored solution
// Time complexity - O(N)
// Space complexity - O(1)
function sumZero2(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    } else if(sum > 0){
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZero2([-3,-2,-1,0,1,2,3,4])) // [-3,3] 
// console.log(sumZero2([-2,0,1,3])) // undefined
// console.log(sumZero2([1,2,3])) // undefined


// _________________________________________

// PROBLEM 2

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  let i = 0
  let j = i+1
  if (!arr.length) {
    return 0
  }
  while(j < arr.length-1) {
    if(arr[i] === arr[j]) {
      j++
    }
    if(arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
      // console.log(arr)
      // console.log('i: ', arr[i], i)
      // console.log('j: ', arr[j], j)
    }
  }
  return i + 1
}

// console.log(countUniqueValues([1,1,1,2,3,3,4,4,5,6])) // 6
// console.log(countUniqueValues([1,1,1,1,1,2])) // 2
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2,-1,-1,0,1]))// 4


// Solution 2
function countUniqueValues2(arr) {
  if(arr.length === 0) return 0
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

console.log(countUniqueValues2([1,1,1,2,3,3,4,4,5,6])) // 6
console.log(countUniqueValues2([1,1,1,1,1,2])) // 2
console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues2([])) // 0
console.log(countUniqueValues2([-2,-1,-1,0,1]))// 4

