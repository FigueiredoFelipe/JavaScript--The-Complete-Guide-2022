const testResults = [1, 3, 5.5, 4, 5, 10, 11, 5.5, 22]

const storedResults = testResults

testResults.push([{ name: 'Holly'}])

const personData = [{name: 'Max'}, {name: 'Holly'}]

console.log(personData);
console.log(personData.indexOf({name: 'Holly'}));

const holly = personData.find((person, index, persons)=>{
    return person.name === 'Holly'
})

holly.name = 'Ana'

console.log(holly, personData);

const maxIndex = personData.findIndex((person, index, persons)=>{
    return person.name === 'Max'})

    console.log(maxIndex);
    console.log(maxIndex);
    console.log(maxIndex);