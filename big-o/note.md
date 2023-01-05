Which solution is better?


**The Problem with Time**
- Solution 2 (add2) is MUCH quicker, however, different machines will record different times (speed)
- The same machine will record different times
- For fast algos, speed measurements may not be precise enough

**If not time, then what?**
- Let's count the number of simple operations the computer has to run (will be the same for every computer)


**Counting Operations**

*solution 2*
Three operations (1 multiplication, 1 addition, 1 division)
- 3 simple operations, regardless of the size of n

function addUpTo2(n) {
  return n * (n + 1) / 2
}

*solution 1*
- let total = 0 --> 1 assigment
- let i = 1 --> 1 assignment
- i <= n --> n comparisons
- i++ --> n additions and n assignments (++ is like +=)
- total += 1 --> n additions(+), n assignments(=)

SO --> Depending on what we count, the number of operations can be as low as 2n or as high as 5n+2
But regardless of the exact number, the number of operations grows roughly *proportionally with n*

function addUpTo(n) {
  let total = 0
  for(let i=1; i<=n; i++) {
    total += i
  }
  return total
}
