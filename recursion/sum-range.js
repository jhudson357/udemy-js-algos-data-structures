function sumRange(num){
  if(num === 1) return 1
  return num + sumRange(num-1)
}

console.log(sumRange(3))

// return 3 + sumRange(2)
              // return 2 + sumRange(1)
                            // return 1 (BASE CASE)
              // return 2 + 1
// return 3 + 2 + 1
// return 6



// Can you spot the base case?
    // when num equals 1, return 1 (line 1)
// Do you notice the different input?
    // line 2 (recursive call)
// What would happen if we didn't return?