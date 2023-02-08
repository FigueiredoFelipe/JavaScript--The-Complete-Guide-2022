const normalQueue = []
const priorityQueue = []
const generalQueue = [normalQueue, priorityQueue]

console.log(normalQueue);
console.log(priorityQueue);
console.log(generalQueue);

normalQueue.push('N01')
priorityQueue.push('P02')
//Do not use unshift()


console.log(normalQueue);
console.log(priorityQueue);
console.log(generalQueue);


const removeNormalQueue = normalQueue.pop()
const removePriorityQueue = priorityQueue.pop()
//also
normalQueue.shift()











