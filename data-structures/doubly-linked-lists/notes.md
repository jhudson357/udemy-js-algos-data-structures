**DOUBLY LINKED LISTS**
- Almost identical to Singly Links Lists, except every node has another pointer, to the *previous* node
- Takes up more memory than singly linked lists (more memory == more flexibility) *almost always a tradeoff
  
- Node has:
  - val
  - next
  - prev

- DoublyLinkedList has:
  - head
  - tail
  - length 

**Methods Pseudocode**
*Pushing*
** Adding a node to the end of the Linked List
- Create a new node with the value passed to the function
- If the head property is null set the head and tail to be the newly created node 
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created node
- Increment the length
- Return the Doubly Linked List

*Popping*
** Removing a node from the end of the Doubly Linked List
- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous Node.
- Set the newTail's next to null
- Decrement the length
- Return the value removed

*Shifting*
** Removing a node from the beginning of the Doubly Linked List