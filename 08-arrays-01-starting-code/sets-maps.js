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

const person1 = { name: 'Max' }
const person2 = { name: 'Manuel' }

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]])

personData.set(person2, [{date: 'two weeks ago', price: 100}])

console.log(personData);
console.log(personData.get(person1));
console.log(personData.get(person2));

for (const [key, value] of personData.entries()){
    console.log(key, value);
}

for (const key of personData.keys()){
    console.log(key);
    console.log(key);
    console.log(key);
}


