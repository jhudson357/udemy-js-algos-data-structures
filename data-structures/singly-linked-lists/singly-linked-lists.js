// singly linked list - collection of Nodes
// Node - stores a piece of data - val - and a reference to the next node - next

class Node{
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList{
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  // instance methods
  push(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if(!this.head) return undefined
    let current = this.head
    let newTail = current
    while(current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if(!this.head) return undefined
    let current = this.head
    this.head = current.next
    this.length--
    if(this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  unshift(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(idx) {
    if(idx < 0 || idx >= this.length) return null
    let count = 0
    let currentNode = this.head
    while(count < idx) {
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }

  set(idx, val) {
    let replacedNode = this.get(idx)
    if(!replacedNode) return false
    replacedNode.val = val
    return true
  }

  insert(idx, val) {
    if(idx < 0 || idx > this.length) return false
    if(idx === this.length) return !!this.push(val)
    if(idx === 0) return !!this.unshift(val)
    
    let leftNode = this.get(idx-1)
    let newNode = new Node(val)
    let previousNextNode = leftNode.next
    leftNode.next = newNode
    newNode.next = previousNextNode
    this.length++
    return true
  }

  remove(idx) {
    if(idx < 0 || idx >= this.length) return undefined
    if(idx === this.length - 1) return this.pop()
    if(idx === 0) return this.shift()

    let nodeLeftOfRemoved = this.get(idx-1)
    let removedNode = this.get(idx)
    nodeLeftOfRemoved.next = removedNode.next
    this.length--
    return removedNode
  }

  print() {
    let arr = []
    let current = this.head
    while(current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }

  reverse() {
    // swap the head and tail
    let node = this.head
    this.head = this.tail
    this.tail = node

    let next
    let prev = null

    for(let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }

}



let list = new SinglyLinkedList()
list.push(100)
list.push(200)
list.push(300)
list.push(400)
list.push(500)
// console.log(list)
// list.pop()
// list.pop()
// list.pop()
// list.shift()
// list.shift()
// list.unshift('Yo Yo Yo')
// console.log(list.get(1))
// console.log(list.set(1, 'Dog'))
// console.log(list.get(1))
// console.log(list.insert(2, 1000))
// console.log(list.get(2))
// console.log(list.insert(5, 2000))
// console.log(list.get(5))
// console.log(list.insert(0, 0))
// console.log(list.get(0))
// console.log(list.get(2))
// console.log(list.remove(2))
// console.log(list.get(2))
console.log(list.reverse())
console.log(list.print())


// console.log(list)
// console.log(list.head)
// console.log(list.head.next)
// console.log(list.tail)