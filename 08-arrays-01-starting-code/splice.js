const patients = ['a', 'b', 'c', 'd']

patients.push('e', 'f', 'g', 'h', 'i')

console.log(patients);

patients.splice(9, 0, 'good food')

console.log(patients);

const removedElements = patients.splice(0, 2, 'Holly', 'Molly')

console.log(patients);

console.log(removedElements);   
console.log(removedElements);   
console.log(removedElements);   