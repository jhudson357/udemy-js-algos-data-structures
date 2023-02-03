**BINARY HEAPS**
* heaps are trees, and there are many types. We will focus on Binary Heaps

**What is a binary heap?**
- Very similar to binary search tree, but with some different rules
- In a *MaxBinaryHeap*, parent nodes are always larger than child nodes. In a  *MinBinaryHeap*, parent nodes are always smaller than child nodes
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

*Remove*
** Remove the root, replace with the most recently added, adjust (sink down)
- Swap the first value in the values property with the last one
- Pop from the values property, so you can return the value at the end.
- Have the new root "sink down" to the correct spot...​
  - Your parent index starts at 0 (the root)
  - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  - Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
  - If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
  - The child index you swapped to now becomes the new parent index.  
  - Keep looping and swapping until neither child is larger than the element.
  - Return the old root!

*Sinking Down*
- The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max)


**Building a Priority Queue**
-.
*What is a Priority Queue?*
- A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.
- Priority queues are separate from heaps - can be implemented with other data structures (it's an abstract concept)

**Priority Queue Pseudocode**
- Write a Min Binary Heap - lower number means higher priority.
- Each Node has a val and a priority.  Use the priority to build the heap.
- *Enqueue* method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
- *Dequeue* method removes root element, returns it, and rearranges heap using priority.


**Big O of Binary Heaps**
- Insertion - O(log N)
- Removal - O(log N)
- Search - O(N)

* Binary heaps not made to be searchable, better to use BST

**RECAP**
- Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues
- Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
- With just a bit of math, we can represent heaps using arrays
