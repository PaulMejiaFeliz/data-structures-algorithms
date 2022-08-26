const strings =['a', 'b', 'c', 'd']

// Push
strings.push('e') // O(1)

// Pop
strings.pop() // O(1)

// Unshift
strings.unshift('x') // O(n)

// Splice
strings.splice(2, 0, 'z') // O(n)

console.log(strings)