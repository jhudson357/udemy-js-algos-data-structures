**Graphs**

**What are Graphs?**
- A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.
- i.e. A collection of nodes and connections between those nodes
- A tree is a type of graph

**Uses for Graphs**
- Social Networks
- Location / Mapping
- Routing algorithms
- Visual Hierarchy
- File System Optimizations
- Recommendation engines ('People also watched', 'You might also like')
- Everywhere!!

**Essential Graph Terms**
- Vertex - a node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances bw verticies
- Directed/Undirected - directions assigned to edges bw vertices

**Representing a Graph - ADJACENCY MATRIX & ADJACENCY LIST**
*Adjacency Matrix*
- matrix showing all vertex's. Shows both the connections and non-connections
- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge

*Adjacency List*
- List/array/hash table of the vertices and only their connections (not non-connections like the natrix table)
- Can take up less space (in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookup specific edge 
- Will use this one in the class bc most data in the real-world tends to lend itself to sparser and/or larger graphs

**Differences & Big O of Matrix and List**
** |V| = number of vertices
** |E| = number of edges

| Operation:       | Adjacency List:   | Adjacency Matrix:   |
| ---------------- | ----------------- | ------------------- |
|  Add vertex      | O(1)              | O(|V^2|)            |
|  Add edge        | O(1)              | O(1)                |
|  Remove vertex   | O(|V| + |E|)      | O(|V^2|)            |
|  Remove edge     | O(|E|)            | O(1)                |
|  Query           | O(|V| + |E|)      | O(1)                |
|  Storage         | O(|V| + |E|)      | O(|V^2|)            |



**PSEUDOCODE**
- 
*Adding a vertex*
- Write a method called addVertex, which accepts a name of a vertex
- It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

*Adding an edge*
- This function should accept two vertices, we can call them vertex1 and vertex2
- The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
- The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
- Don't worry about handling errors/invalid vertices

*Removing an edge*
- This function should accept two vertices, we'll call them vertex1 and vertex2
- The function should reassign the key of vertex1 to be an array that does not contain vertex2
- The function should reassign the key of vertex2 to be an array that does not contain vertex1
- Don't worry about handling errors/invalid vertices

*Removing a vertex*
- The function should accept a vertex to remove
- The function should loop as long as there are any other vertices in the adjacency list for that vertex
- Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
- Delete the key in the adjacency list for that vertex

