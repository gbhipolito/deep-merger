# deep-merger
Utility for deeply merging objects (and arrays)

# Install
`npm install deep-merger`

# Example
```js
const deepMerger = require('deep-merger');

const a = {a: 1, b: 2, asdf: ['a', 'b', 1, 3]};
const b = {c: 7, asdf: ['b', 2, 4], b: null, f: [1,2,3]};
const c = {arr: [0,1,2], f: 'hi'};

// merges variable number of objects from left to right. left-most is the default, and right-most has highest precedence
console.log('original: ', a);
console.log();
console.log('immutate return: ', deepMerger.immutateDeepMerge(a, b, c));
console.log('immutated original: ', a);
console.log();
console.log('mutate return: ', deepMerger.mutateDeepMerge(a, b, c)); // mutates the original (left-most) object
console.log('mutated original: ', a);
```

**Output**
```
original:  { a: 1, b: 2, asdf: [ 'a', 'b', 1, 3 ] }

immutate return:  { a: 1,
  b: null,
  asdf: [ 'a', 'b', 1, 3, 2, 4 ],
  c: 7,
  f: 'hi',
  arr: [ 0, 1, 2 ] }
immutated original:  { a: 1, b: 2, asdf: [ 'a', 'b', 1, 3 ] }

mutate return:  { a: 1,
  b: null,
  asdf: [ 'a', 'b', 1, 3, 2, 4 ],
  c: 7,
  f: 'hi',
  arr: [ 0, 1, 2 ] }
mutated original:  { a: 1,
  b: null,
  asdf: [ 'a', 'b', 1, 3, 2, 4 ],
  c: 7,
  f: 'hi',
  arr: [ 0, 1, 2 ] }
  ```
