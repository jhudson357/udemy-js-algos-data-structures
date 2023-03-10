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

// console.log(countUniqueValues2([1,1,1,2,3,3,4,4,5,6])) // 6
// console.log(countUniqueValues2([1,1,1,1,1,2])) // 2
// console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13])) // 7
// console.log(countUniqueValues2([])) // 0
// console.log(countUniqueValues2([-2,-1,-1,0,1]))// 4


// _____________________________________________
// _____________________________________________


// CODING EXERCISE 4 (Section 6)

// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. (this can be solved using the frequency counter pattern OR the multiple pointers pattern). Time O(N), Space O(N)

function areThereDuplicates(...args) {
  let j = args[args.length - 1]
  for(let i = 0; i<args.length-1; i++) {
    // console.log(i, args[i], j)
    if(args[i] === j) {
      return true
    }
  }
  return false
}


// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 2)) // true 
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 

// _____________________________________________
// _____________________________________________

// EXERISE 5 (Section 6)

// Write a funcion called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.


function averagePair(arr, avg) {
  // double the avg
  let double = avg * 2
  let j = arr.length-1

  if(arr.length <= 1 ) return false
  // look for a pair that add up to the doubled avg
  for(let i = 0; i < arr.length; i++) {
    if((arr[i] + arr[j]) > double) {
      j --
    } else if((arr[i] + arr[j] === double)) {
      return true
    }
  }
  return false
}


// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false

// _____________________________________________
// _____________________________________________

// EXERCISE 5 (Section 6)

// Write a function called isSubsequece which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. 

function isSubsequence(str1, str2){
  let i = 0
  let j = 0
  while(j < str2.length){
    if(str2[j] === str1[i]) {
      i++
    }
    if(i === str1.length) {
      return true
    }
    j++
  }
  return false
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)

