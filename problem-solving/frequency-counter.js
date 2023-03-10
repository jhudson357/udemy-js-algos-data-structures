// Frequency Counters

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)


// Naive solution - nested loops (for and indexOf)
// if arr length is 1000, that's 1,000,000 iterations (1000^2) worst case
// time complexity = N^2
function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }
  for (let i=0; i<arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)  // ** is exponent
    if (correctIndex === -1) {  // this will be true if arr1[i]^2 isn't in arr2
      return false
    }
    // console.log(arr2)
    arr2.splice(correctIndex, 1)  // removes the value from arr2 if it's in it
  }
  return true
}

// console.log(same([1,2,3,2], [9,1,4,4]))

// _____________________________________________


// Refactored - 3 loops total (if arr length is 1000, that's 3000 iterations)
// time complexity - O(N)

function same2(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
        return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
        return false
      }
    }
    // console.log(frequencyCounter1)
    // console.log(frequencyCounter2)
  return true
}

// console.log(same2([1,2,3,2], [9,1,4,4]))

// _____________________________________________
// _____________________________________________


// ANAGRAMS

// Given 2 strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman


function validAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let char of str1){
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }
  for(let char of str2){
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }
  // console.log(frequencyCounter1)
  // console.log(frequencyCounter2)
  for(let key in frequencyCounter1) {
    if(!(key in frequencyCounter2)){
      return false
    }
    if(frequencyCounter1[key] != frequencyCounter2[key]){
      return false
    }
  }
  return true
}

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// option 2
function validAnagram2(first, second) {
  if(first.length !== second.length) return false

  let lookup = {}
  for(let i=0; i<first.length; i++) {
    let char = first[i]
    // console.log(char)
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1
  }
  // console.log(lookup)

  for(let i=0; i<second.length; i++) {
    let char = second[i]
    // console.log(char)
    if(!(lookup[char])) {
      return false
    } else {
      lookup[char] -= 1
    }
  }
  return true
}

// console.log(validAnagram2('catt', 'ttac')) // true
// console.log(validAnagram2('', '')) // true
// console.log(validAnagram2('aaz', 'zza')) // false
// console.log(validAnagram2('anagram', 'nagaram')) // true
// console.log(validAnagram2("rat","car")) // false) // false
// console.log(validAnagram2('awesome', 'awesom')) // false
// console.log(validAnagram2('qwerty', 'qeywrt')) // true
// console.log(validAnagram2('texttwisttime', 'timetwisttext')) // true


// _____________________________________________
// _____________________________________________


// CODING EXERCISE 3 (Section 6)

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Time O(N)

function sameFrequency(int1, int2) {
  let count = {}
  let str1 = int1.toString()
  let str2 = int2.toString()

  if(str1.length !== str2.length) return false
  
  for(let i=0; i<str1.length; i++) {
    let num = str1[i]
    count[num] ? count[num] += 1 : count[num] = 1
  }
  // console.log(count)

  for(let i=0; i<str2.length; i++) {
    let num = str2[i]
    if(!(count[num])) {
      return false
    } else {
      count[num] -= 1
    }
  }
  return true
}

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false

// _____________________________________________
// _____________________________________________


// CODING EXERCISE 4 (Section 6)

// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. (this can be solved using the frequency counter pattern OR the multiple pointers pattern). Time O(N), Space O(N)


function areThereDuplicates(...arg) {
  let frequencyCounter = {}

  for(let i = 0; i < arg.length; i++) {
    let num = arg[i]
    frequencyCounter[num] ? frequencyCounter[num] += 1 : frequencyCounter[num] = 1
  }
  // console.log(frequencyCounter)
  for (let item in frequencyCounter) {
    // console.log(frequencyCounter[item])
    if(frequencyCounter[item] > 1) {
      return true
    }
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 

