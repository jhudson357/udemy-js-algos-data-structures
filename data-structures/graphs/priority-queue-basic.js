// basic priority queue --> can be improved using a heap
// gives us the smallest priority value first

class PriorityQueue {
  constructor(){
    this.values = []
  }
  enqueue(val, priority) {
    this.values.push({val, priority})
    this.sort()
  }
  dequeue() {
    return this.values.shift()
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

let q = new PriorityQueue()
q.enqueue('B',3)
q.enqueue('C',5)
q.enqueue('D',2)
q.enqueue('Q',20)
console.log(q.values)