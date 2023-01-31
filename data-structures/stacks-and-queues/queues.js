// array implementation
// let q = []

// push & unshift
// q.push('first')
// q.push('second')
// q.push('third')
// console.log(q.shift())

// unshift & pop
// q.unshift('first')
// q.unshift('second')
// q.unshift('third')
// console.log(q.pop())

// console.log(q)


// --------------------------------
// --------------------------------


// Queue class implementation

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  // methods
  enqueue(val) {
    let newNode = new Node(val)
    if(!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }

  dequeue() {
    if(!this.first) return null
    
    let removedNode = this.first
    if(this.size === 1) {
      this.last = null
    } 
    this.first = removedNode.next
    this.size--
    return removedNode.val
  }

}

let q = new Queue()

q.enqueue('first')
q.enqueue('second')
q.enqueue('third')
console.log(q)
console.log(q.dequeue())

console.log(q)