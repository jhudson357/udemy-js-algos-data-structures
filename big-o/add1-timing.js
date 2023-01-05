// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n

// solution 1
function addUpTo(n) {
  let total = 0
  for(let i=1; i<=n; i++) {
    total += i
  }
  return total
}

let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time elapsed: ${(t2-t1) / 1000} seconds.`)

// time elapsed is 1.0699 seconds (SIGNIFICANTLY SLOWER THAN add2 solution)