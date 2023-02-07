// const number = [1, 2, 3]
// console.log(number);

// const moreNumbers = new Array('Hi!', 'Welcome!', 'Holly') // []
// console.log(`Will display the new Array: ${moreNumbers}`);
// console.log(moreNumbers);

// const fixedSize = new Array(5)
// console.log(fixedSize);  

// const yetMoreNumbers = Array.of(5)
// console.log(yetMoreNumbers);

// const listItems = document.getElementsByTagName('li')

// const lotsNumbers = Array.from(listItems)

// console.log(listItems);
// console.log(lotsNumbers);

// const hobbies = ['Playing', 'Singing', 'Planting']

// const personalData = [30, 'Jono', 'male', {moreDetails: [1,2,3,4,5]}]

// console.log(hobbies);
// console.log(personalData);

// const analyticsData = [[90, 60, 90],[-5, 3,5], 'Hi', {a, b, c} ]

// for (const data of analyticsData){
//     // console.log(data);
//     // console.log(analyticsData);
//     for (const dataPoint of data){
//         console.log(dataPoint);
//     }
// }

// push always adds in the end of the array. 
// unshift will add in the beginning of the array. I can't use it in my project, because I want the attendant can call one patient of each queue.

const hobbies = ['Sports', 'Cooking']
hobbies.push('Eating')
hobbies.push('Reading')
hobbies.unshift('Coding')

const poppedValue = hobbies.pop();
hobbies.shift()

console.log(hobbies[0]);
console.log(hobbies[0]);

hobbies[0] = 'Holly'

console.log(hobbies[0]);
console.log(hobbies[0]);

hobbies.splice(0, 1)

console.log(hobbies[0]);
console.log(hobbies[0]);