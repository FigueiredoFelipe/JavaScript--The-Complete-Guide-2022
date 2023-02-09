const prices = [1, 2 , 3]

const transformToObjects = (numberArray) => numberArray.map(value => ({val: value}))

console.log(transformToObjects(prices));
