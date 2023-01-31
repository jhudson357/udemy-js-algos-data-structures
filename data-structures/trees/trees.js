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

}

let tree = new BinarySearchTree()
console.log(tree.insert(10))
console.log(tree.insert(5))
console.log(tree.insert(13))
console.log(tree.insert(11))
console.log(tree.insert(2))
console.log(tree.insert(16))
console.log(tree.insert(7))
console.log(tree.insert(7))

// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)

// console.log(tree)