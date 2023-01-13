// Linear search pseudocode

// This function accepts an array
// Loop thru the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1

function linearSearch(arr, val) {
  if(arr.includes(val)) {
    return arr.indexOf(val)
  } else {
    return -1
  }
}
// time complexity - O(N)

console.log(linearSearch([1,2,3,4,5], 6))

// Option 2

function linearSearch2(arr, val) {
  for(let i=0; i<arr.length; i++) {
    if (arr[i] === val) return i 
  }
  return -1
}

// time complexity - O(N)

console.log(linearSearch2([167,2,322,44,5], 322))