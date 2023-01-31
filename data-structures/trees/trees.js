// Binary Search Tree Class

class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }

  insert(value) {
    let newNode = new Node(value)
    if(!this.root) {
      this.root = newNode
      return this
    }
    let current = this.root
    while(true) {
      if(value === current.value) return undefined
      if(value < current.value) {
        if(current.left === null) {
          current.left = newNode
          return this
        } else {
          current = current.left
        }
      } else if(value > current.value) {
        if(current.right === null) {
          current.right = newNode
          return this
        } else {
          current = current.right
        }
      }
    }
  }

  find(value) {
    if(this.root === null) return false
    let current = this.root
    let found = false
    while(current && !found) {
      if(value < current.value) {
        current = current.left
      } else if(value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if(!found) return undefined
    return current
  }

  bfs() {
    let data = []
    let queue = []
    let node = this.root

    queue.push(node)
    while(queue.length) {
      node = queue.shift()
      data.push(node.value)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data
  }

}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
// console.log(tree.find(100))
// console.log(tree.find(16))
console.log(tree.bfs())

// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)

// console.log(tree)