**SINGLY LINKED LISTS**

*What is a linked list?*
- A data structure that contains a head, tail, and length property
- Linked lists consists of nodes, and each node has a value and a pointer to another node or null
- NO INDICES!!! (differs from arrays in this way)
- If you want a specifc item in the list, start at the beginning and then go to the next item until you reach the desired item
- Ex: an array is like a bulding with an elevator that can take you directly to your desired floor (index). A singly linked list is like a walk-up building where you have to walk to each floor before reaching your desired floor.

*Comparisons with Arrays*
Lists
- Do not have indices
- Connected via nodes with a next pointer
- Random access is not allowed

Arrays
- Indexed in order
- Insertion and deletion can be expensive (inserting item in the middle requires all items after to be re-indexed)
- Can quickly be accessed at a specific index

**Instance Methods Pseudocde**
*Pushing pseudocode*
**Adding a node to the end of the Linked List
- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Increment the length by one
- Return the linked list

*Popping pseudocode*
**Removing a node from the end of the Linked List
- If there are no nodes in the list, return undefined
- Loop through the list until you reach the tail (and node right before tail)
- Set the next property of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed

