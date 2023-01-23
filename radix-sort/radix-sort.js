// RADIX SORT HELPERS

// getDigit(num, place)

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// console.log(getDigit(7323, 0))  // 3
// console.log(getDigit(7323, 1))  // 2
// console.log(getDigit(7323, 2))  // 3
// console.log(getDigit(7323, 3))  // 7
// console.log(getDigit(7323, 4))  // 0

// ---------------------------------------------------------

function digitCount(num) {
  if(num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// console.log(digitCount(7323))

// ---------------------------------------------------------

function mostDigits(nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits  = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

// console.log(mostDigits([23,567,89,2897359,90]))


// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

// RADIX SORT PSEUDOCODE

// 1. Define a function that accepts list of numbers
// 2. Figure out how many digits the largest number has
// 3. Loop from k = 0 up to this largest number of digits
// 4. For each iteration of the loop:
  // - Create buckets for each digit (0 to 9)
  // - place each number in the corresponding bucket based on its kth digit
// 5. Replace our existing array with values in our buckets, starting with 0 and going up to 9
// 6. return list at the end!

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)
  for(let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for(let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
    // console.log(nums)
  }
  return nums
}

console.log(radixSort([23,345,5467,12,2345,9852]))