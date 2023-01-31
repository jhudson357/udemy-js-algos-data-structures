**TREES**

*What is a tree?*
- A data structure that consists of nodes in a parent/child relationship
  - A node can't point to its sibling. Can only point to its children
  - Need one root (entrypoint)
- Lists are **linear** (one path through)
- Trees are **nonlinear** (more than one path that you can take)

*Terminology*
- **Root** - The top node in a tree.
- **Child** - A node directly connected to another node when moving away from the Root.
- **Parent** - The converse notion of a child.
- **Siblings** - A group of nodes with the same parent.
- **Leaf** - A node with no children.
- **Edge** - The connection (arrow) between one node and another.

*Kinds of Trees (that we'll focus on)*
- Trees
- Binary Trees
- Binary Search Trees

*Trees*
- Lots of different applications
  - HTML DOM
  - Network Routing
  - Abstract Syntax Tree
  - Articial Intelligence

*Binary Trees*
- Nodes can have at most 2 children (can have 0,1,2 children)

*Binary Search Trees (BST)*
- Special case of binary tree
- Sorted 
  - Every child less than the parent value is stored on the left of the parent
  - Every child greater than the parent value is stored on the right of the parent

*Why are binary search trees used?*
- very simple for searching with the way it's sorted
- With every comparison, we should roughly chop in half the data we're looking thru (dependent on how the tree is distributed)

**BST Method Pseudocode**
*Insert*
- Create a new node
- Starting at the root
  - Check if there is a root, if not - the root now becomes that new node!
  - If there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater 
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the right property
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property
- Return the entire tree