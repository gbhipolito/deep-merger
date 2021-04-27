const immutateDeepMerge = require('./immutateDeepMerge');
const mutateDeepMerge = require('./mutateDeepMerge');

module.exports = {
    immutateDeepMerge,
    mutateDeepMerge,
}

// const testA = {
//     a: 1,
//     b: '2',
//     c: {
//         d: 'asdf',
//         e: null,
//         f: [1, 2, 5]
//     },
//     g: ['a','b','d'],
//     h: {
//         i: 1,
//     }
// };

// const testB = {
//     b: 5,
//     c: {
//         j: '123',
//         d: null
//     },
//     h: 7
// };

// const testC = {
//     g: [1,2,3]
// };

// console.log({testA, testB, testC});
// console.log(immutateDeepMerge(testA, testB, testC));