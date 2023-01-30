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
  print() {
    let arr = []
    let current = this.head
    while(current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }

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

  get(idx) {
    if(idx < 0 || idx >= this.length) return null
    if(idx <= Math.floor(this.length / 2)) {
      let count = 0
      var currentNode = this.head
      while (count < idx) {
        currentNode = currentNode.next
        // console.log('first half')
        count++
      }
    } else {
      var currentNode = this.tail
      let count = this.length - 1
      while(count > idx) {
        currentNode = currentNode.prev
        // console.log('second half')
        count--
      }
    }
    return currentNode
  }

  set(idx, val) {
    if(this.get(idx)) {
      let setNode = this.get(idx)
      setNode.val = val
      return true
    }
    return false
  }

  insert(idx, val) {
    if(idx < 0 || idx > this.length) return false
    if(idx === 0) return !!this.unshift(val)
    if(idx === this.length) return !!this.push(val)

    let beforeNode = this.get(idx - 1)
    let newNode =  new Node(val)
    let afterNode = beforeNode.next
    
    beforeNode.next = newNode
    newNode.prev = beforeNode
    afterNode.prev = newNode
    newNode.next = afterNode
    
    this.length++
    return true
  }

  remove(idx) {
    if(idx < 0 || idx >= this.length) return false
    if(idx === 0) return !!this.shift(idx)
    if(idx === this.length-1) return !!this.pop(idx)

    let foundNode = this.get(idx)
    let beforeNode = this.get(idx - 1)
    let afterNode = this.get(idx + 1)
    
    foundNode.next = null
    foundNode.prev = null

    beforeNode.next = afterNode
    afterNode.prev = beforeNode

    this.length--
    return foundNode
  }

  reverse() {
    if(!this.head) return undefined
    
    // swap head and tail
    let node = this.head
    this.head = this.tail
    this.tail = node

    let count = 0
    let prev = null
    let next

    while(count < this.length) {
      next = node.next
      node.prev = next
      node.next = prev
      prev = node
      node = next
      count++
    }
    return this
  }

}



let list = new DoublyLinkedList()
list.push(0)
list.push(100)
list.push(200)
list.push(300)
list.push(400)
list.push(500)
// console.log(list.print())
console.log('--------------------')
// console.log(list.pop())
// console.log(list.shift())
// console.log(list.unshift(50))
// console.log(list.get(3))
// console.log('--------------------')
// console.log(list.set(5, 1000))
// list.insert(2, -100)
// console.log(list.remove(2))
console.log(list.print())
list.reverse()
console.log(list.print())
console.log('--------------------')

// console.log(list)