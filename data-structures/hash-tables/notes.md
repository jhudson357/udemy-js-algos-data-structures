**Hash Tables**
*aka Hash Maps*

**What is a Hash Table?**
- Hash tables are used to store *key-value* pairs
- They are like arrays, but the keys are not ordered
- Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values

**Why Should I care?**
- Nearly every programming language has some sort of hash table data structure
- Bc of their speed, has tables are very commonly used

**Hash Tables in the Wild**
- Python has Dictionaries
- JS has Objects and Maps*
- Java, Go, & Scala have Maps
- Ruby has...Hashes


**Implementing Hash Table Examples**
*The Hash Part*
- To implement a hash table, we'll be using an array
- In order to look up values by key, we need a way to convert keys into valid array indices
- A function that performs this task is called a hash function

*What Makes a Good Hash Function*
1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

*Dealing with Collisions*
- even with a large array and a great hash function, collisions are inevitable
- There are many strategies for dealing with collisions, but here are two:
  1. Separate Chaining
  2. Linear Probing

**Separate Chaining**
- With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
- This allows us to store multiple key-value pairs at the same index.

**Linear Probing**
- With linear probing, when we find a collision, we search through the array to find the next empty slot.
- Unlike with separate chaining, this allows us to store a single key-value at each index.


**PSEUDOCODE**
*Set / Get*
** set
1. Accepts a key and a value
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining

** get
1. Accepts a key
2. Hashes the key
3. Retrieves the key-value pair in the hash table
4. If the key isn't found, returns undefined