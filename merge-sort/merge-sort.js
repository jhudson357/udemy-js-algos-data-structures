// MERGING ARRAYS PSEUDOCODE
// 1. Create an empty array, take a look at the smallest values in each input array
// 2. While there are still values we haven't looked at...
  // - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  // - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  // - Once we exhaust one array, push in all remaining values from the other array


function merge(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0

  while(i < arr1.length && j < arr2.length) { 
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while(j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

// console.log(merge([1,10,50], [2,14,99,100]))
// console.log(merge([], [1,3]))
// console.log(merge([1,3,5], [1,3]))


// -----------------------------------
// -----------------------------------
// -----------------------------------


// mergeSort PSEUDOCODE

// 1. Break up the array into halves until you have arrays that are empty or have one element (array.slice)
// 2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// 3. Once the array has been merged back together, return the merged (and sorted!) array


function mergeSort(arr) {
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)

}

console.log(mergeSort([10,24,76,73]))
// console.log(mergeSort([10,24,76,73,72,1,9]))


// let arr = [10,24,76,73,72,1,9]
// console.log(arr)
// console.log(Math.floor(arr.length/2))
// let arr1 = arr.slice(0, 3)
// console.log(arr1)
// let arr2 = arr.slice(3)
// console.log(arr2)