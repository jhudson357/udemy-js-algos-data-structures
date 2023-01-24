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

}



let list = new SinglyLinkedList()
list.push('Hello')
list.push('Goodbye')
list.push('!')
console.log(list)
// list.pop()
// list.pop()
// list.pop()
// list.shift()
// list.shift()
list.unshift('Yo Yo Yo')


console.log(list)
// console.log(list.head)
// console.log(list.head.next)
// console.log(list.tail)