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

console.log(linearSearch([1,2,3,4,5], 5))