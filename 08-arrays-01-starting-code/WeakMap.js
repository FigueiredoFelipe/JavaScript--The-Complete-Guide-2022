let person = {name: 'Felipe'}

const persons = new WeakSet()

persons.add(person)

// persons.has(person)
// person = null

console.log(persons);
console.log(person);

const personData = new WeakMap()
personData.set(person, 'Daniela')
console.log(personData);