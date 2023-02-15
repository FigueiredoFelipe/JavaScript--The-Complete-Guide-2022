const person1 = ['Manuel']
const person2 = ['Holly']

const personData = new Map([[person1, [{age: '34'}]]])

console.log(personData);
console.log(person1);
console.log(personData.get(person1));
console.log(personData.get(person1));

for (const entries of personData.entries()){
    console.log(entries);
    console.log(entries);
}

for (const [key, value] of personData.entries()){
    console.log(key);
    console.log(value);
}

for (const keys of personData.keys()){
    console.log(keys);
    console.log(keys);
    console.log(keys);
    console.log(keys);
}

for (const values of personData.values()){
    console.log(values);
    console.log(values);
    console.log(values);
    console.log(values);
    console.log(values);
    console.log(values);
}

console.log(personData.delete());
console.log(personData);
console.log(personData);
console.log(personData);