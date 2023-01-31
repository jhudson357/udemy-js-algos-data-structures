**STACKS**

*What is a stack*
- A **LIFO** data structure. (Last in, First out)
- The last element added to the stack will be the first element removed from the stack (Queue is FIFO)
- Like Recursion -> The call stack

*How is it used?*
- Think about a stack of plates, or a stack of markers
- As you pile it up, the last thing (or the topmost thing) is what gets removed first

*Where stacks are used*
- Managing function invocations
- Undo / Redo (Cmd Z in photoshop)
- Routing (the history object) is treated like a stack

**THERE IS MORE THAN ONE WAY OF IMPLEMENTING A STACK**
- Array implementation
- Linked list implementation
- etc.


*Array Implementation*
- If using push/pop (unshift/shift) in tandem on an array, creates a stack
  - push/pop much better than shift/unshift bc arrays have indexes. When you shift/unshift (add/remove from beginning of array, all of the following elements need to be reindexed --> greated time complexity)
  - If you care about efficiency with a stack, it's better to use a linked list
    - If you have a massive set of data, use a list instead of an array

**Pseudocode (singly linked lists)**
<!-- Push/Pull very similar to unshift/shift for lists -->
<!-- Rather than using push/pop that we wrote for singly linked lists, if we add/remove from the end, it's not constant time to remove from the end bc we had to iterate over the entire list to get to the second to last item to set that to be the new tail, and a stack is supposed to be constant time. So, we're adding and removing from the beginning of our list, but we are calling it push/pop bc it's a stack -->
*Push*
** Add a value to the top of the stack
- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node 
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

*Pop*
** Remove a value from the top of the stack
- If there are no nodes in the stack, return null
- Create a temporary variable to store the first property on the stack
- If there is only 1 node, set the first and last property to be null
- If there is more than one node, set the first property to be the next property on the current first
- Decrement the size by 1
- Return the value of the node removed

**Big O of Stacks**
** Only important ones are insertion and removal for stacks
- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)


**RECAP**
- Stacks are a LIFO data structure where the last value in is always the first one out
- Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
- They are not a built in data structure in JavaScript, but are relatively simple to implement
- Insert and remove are both O(1)

