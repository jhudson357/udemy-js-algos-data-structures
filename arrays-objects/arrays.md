**Arrays - Ordered lists!**

**Big O of Arrays**
- Insertion - it depends...
- Removal - it depends...
- Searching - O(N)
- Access - O(1)

**Insertion**
- Inserting at the end (.push) --> O(1)
- Inserting at the start (.shift) --> O(N) - we have to re-index every element in the array (index 0 becomes 1 after we add new element, 1 becomes 2, etc.)

**Removal**
- Removing at the end (.pop) --> O(1)
- Removing at the start (.unshift) --> O(N) - like insertion, we need to re-index every element in the array if we remove the first element

**Big O of Array Methods**
- push - O(1)
- pop - O(1)
- shift - O(N)
- unshift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N * log N)
- forEach/map/filter/reduce/etc. - O(N)