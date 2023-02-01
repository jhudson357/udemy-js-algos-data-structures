**BINARY HEAPS**
* heaps are trees, and there are many types. We will focus on Binary Heaps

**What is a binary heap?**
- Very similar to binary search tree, but with some different rules
- In a *MaxBinaryHeap*, parent nodes are always larger than child nodes. Ina  *MinBinaryHeap*, parent nodes are always smaller than child nodes
- Each node can have at most two children
- Different from BSTs, there is no order left to right (i.e. smaller on left, greater on right). Just need to make sure that the children are smaller than their parent node

**MAX Binary Heap**
- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

*Why do we need to know this?*
- Binary Heaps are used to implement *Priority Queues*, which are very commonly used data structures
- They are also used quite a bit with *graph traversal* algorithms

**Formula to get Children's indices based on their Parent's index**
- For any index of an array n...
- The left child is stored at *2n + 1*
- The right child is at *2n + 2*

**Formuala to get Parent's index based on the Children's Indices**
- For any child node at index n...
- Its parent is at index *(n-1) / 2* (floored)


**PSUEDOCODE**
*Insert*
- Push the value into the values property on the heap
- Bubble Up:
  - Create a variable called index which is the length of the values property - 1
  - Create a variable called parentIndex which is the floor of (index-1)/2
  - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - Swap the value of the values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over!


