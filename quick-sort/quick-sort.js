// PIVOT PSEUDOCODE

// - It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// - Grab the pivot from the start of the array 
// - Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// - Loop through the array from the start until the end
  // - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// - Swap the starting element (i.e. the pivot) with the pivot index
// - Return the pivot index

function pivot(arr, start = 0, end = arr.length-1) {
  function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp 
  }
  
  let pivot = arr[start]
  let swapIdx = start

  for(let i = start+1; i < arr.length; i++) {
    if(pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
      console.log(arr)
    }
  }
  swap(arr, start, swapIdx)

  console.log(arr)
  return swapIdx
}

// console.log(pivot([4,8,2,1,5,7,6,3]))


// ---------------------------------
// ---------------------------------
// ---------------------------------


// Quicksort Pseudocode