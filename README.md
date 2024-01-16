# learning react with chai or code

# react fiber instead of react-virtual dom
https://github.com/acdlite/react-fiber-architecture

The diffing algorithm is a core part of React that allows it to update the DOM efficiently. It works by comparing the previous virtual DOM with the new one and determining the most efficient way to update the actual DOM. This process significantly reduces the computational load and makes the user experience smoother and faster.
The diffing algorithm is a recursive algorithm that compares two trees, starting at the root node.
Once the algorithm has finished comparing the two trees, it will generate a list of updates that need to be made to the actual DOM. This list typically consists of a set of mutations, such as adding, removing, or updating elements.