class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // methods
  push(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if(!this.head) return undefined
    let removedTail = this.tail
    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      removedTail.prev = null
    }
    this.length--
    return removedTail
  }
  
  shift() {
    if(this.length === 0) return undefined
    let oldHead = this.head
    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }

  unshift(val) {
    let newNode = new Node(val)
    let oldHead = this.head
    if(this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      oldHead.prev = newNode
      newNode.next = oldHead
      this.head = newNode
    }
    this.length++
    return list
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
}



let list = new DoublyLinkedList()
console.log(list.push(99))
console.log('--------------------')
console.log(list.push(100))
console.log('--------------------')
console.log(list.push(101))
console.log('--------------------')
// console.log(list.pop())
// console.log(list.shift())
console.log(list.unshift(50))
console.log('--------------------')

console.log(list)
console.log(list.print())