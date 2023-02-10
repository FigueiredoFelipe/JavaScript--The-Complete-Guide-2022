// const ids = new Set(['Hi', 'From', 'Set!'])
// ids.add(2)

// if (ids.has('Hi')){
//     ids.delete('Hi')
// } else {
//     console.log('Error deleting');
//     return
// }

// for (const entry of ids.entries()){
//     console.log(entry);
// }

const person1 = {name: 'Max'}
const person2 = {name: 'Manuel'}

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]])

// console.log(personData);
console.log(personData.get(person1));