// optimized priority queue using binary heap

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while(idx > 0) {
      let parentIdx = Math.floor((idx-1)/2)
      let parent = this.values[parentIdx]
      if(element.priority >= parent.priority) break
      // swap parent and child
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()
    if(this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return min
  }

  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while(true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if(leftChild.priority < element.priority) {
          swap = leftChildIdx
        }
      }
      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if(
          (swap === null && rightChild.priority < element.priority) || 
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx
        }
      }
      if(swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }

}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]= []
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node: v2, weight})
    this.adjacencyList[v2].push({node: v1, weight})
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let path = []  // to return at the end
    let smallest

    // build up initial state
    for(let vertex in this.adjacencyList) {
      if(vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] === null
    }
    // as long as there is something to visit
    while(nodes.values.length) {
      smallest = nodes.dequeue().val
      if(smallest === finish) {
        // console.log(distances)
        // console.log(previous)
        // WE ARE DONE
        while(previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if(smallest || distances[smallest] !== Infinity) {
        for(let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if(candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            // updating previous - How we got ot neighbor
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
    return path.concat(smallest).reverse()
  }
}

let g = new WeightedGraph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A','B',4)
g.addEdge('A','C',2)
g.addEdge('B','E',3)
g.addEdge('C','D',2)
g.addEdge('C','F',4)
g.addEdge('D','E',3)
g.addEdge('D','F',1)
g.addEdge('E','F',1)

console.log(g.dijkstra('A','E'))
console.log(g.dijkstra('A','F'))
console.log(g.dijkstra('A','D'))



