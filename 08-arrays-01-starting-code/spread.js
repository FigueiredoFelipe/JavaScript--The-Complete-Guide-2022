const prices = [10.99, 5.99, 3.99, 6, 59]
const tax = 0.19

const taxAdjustedPrices = prices.map((price, index, prices) => {
    const priceObj = { index, taxAdjustedPrices: price * (1 + tax) }
    return priceObj
})

// console.log(prices);
// console.log(taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1
    } else if (a === b) {
        return 0
    } else {
        return -1
    }
})

console.log(sortedPrices.reverse());

const filteredArray = prices.filter(price => price > 6)

console.log(filteredArray);

// let sum = 0;

// prices.forEach(()=>{
//     sum += prices
// })


const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0)

console.log(sum);

const data = 'newyork;10.99;2000'

const transformedData = data.split(';')

console.log(transformedData);


const nameFragments = ['Max', 'Schwarz']
const name = nameFragments.join(' ')

console.log(name);

//spread operator pulls out all elements of an array

const copiedNameFragments = [...nameFragments]
nameFragments.push('Holly')
console.log(nameFragments, copiedNameFragments);

console.log(Math.min(...prices));

const persons = [{ name: 'Max', age: 30 }, { name: 'Holly', age: 42 }]
const copiedPersons = [...persons]
persons.push({name: 'Felipe', age:'36'})
persons[0].age = 25
console.log(persons, copiedPersons);