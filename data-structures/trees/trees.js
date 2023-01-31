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

}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree.find(100))
console.log(tree.find(16))

// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)

// console.log(tree)