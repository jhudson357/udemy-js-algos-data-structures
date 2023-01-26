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
- Create a new node with the value passed to the function
- If the head property is null set the head and tail to be the newly created node 
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created node
- Increment the length
- Return the Doubly Linked List