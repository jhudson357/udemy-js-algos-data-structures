**Tree Traversal**

**Two Ways**
1. Breadth-first Search (BFS)
   1. going across (left to right thru tree)
2. Depth-first Search (DFS) - traversing down the tree rather than horizontally like BFS
   1. InOrder
   2. PreOrder
   3. PostOrder

*Breadth-first Search (BFS)*
**Looking at every sibling node before moving down to the children nodes
- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequeued - add it to the queue
  - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

*Depth-first Search (DFS)*
**PreOrder**
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - Push the value of the node to the variable that stores the values
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable

**PostOrder**
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
  - Push the value of the node to the variable that stores the values
  - Invoke the helper function with the current variable
- Return the array of values

**InOrder**
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - Push the value of the node to the variable that stores the values
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values


**BFS vs DFS ??**
- Depends on the tree
- Time complexity is the same for each --> need to think about space complexity
- If your tree is fully fleshed out/wide (huge tree), then depth-first search is better (less data to store in queue memory)
- If your tree is deep/long/slim (like a list) - will only have one thing in queue/memory --> breadth first search is good

**Pre vs Post vs InOrder ??**
- InOrder
  - Used commonly with BSTs
  - We get all nodes in the tree in their underlying order (smallest to greatest)
- PreOrder
  - Can be used to 'export' a tree structure so that it is easily reconstructed or copied


**RECAP**
- Trees are non-linear data structures that contain a root and child nodes
- Binary Trees can have values of any type, but at most two children for each parent
- Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
- We can search through Trees using BFS and DFS