// BUBBLE SORT PSEUDOCODE

// 1. Start looping from with a variable called i the end of the array towards the beginning
// 2. Start an inner loop with a variable called j from the beginning until i - 1
// 3. If arr[j] is greater than arr[j+1], swap those two values!
// 4. Return the sorted array


// NAIVE SOLUTION (not follwing pseudocode)
function bubbleSort(arr) {
  for(let i=0; i < arr.length; i++) {
    for(let j=0; j<arr.length; j++) {
      console.log(arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]) {
        // SWAP!
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

// SOLTION (following pseudocode)
function bubbleSort2(arr) {
  for(let i = arr.length; i>0; i--) {
    for(let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]) {
        // SWAP!
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

// console.log(bubbleSort2([37, 45, 29, 8]))


// SOLUTION 3 (ES2015)
function bubbleSort3(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i-1; j++) {
      console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
      }
    }
  }
  return arr
}

console.log(bubbleSort3([37, 45, 29, 8]))