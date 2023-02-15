// const numbers = [1, 2, 3, 4, 5, 6]
// const testing = ['test']
// const combined = [[1, 2, 3][4, 5, 6]]

// const mappedNumbers = numbers.map((num, index) => {
//     const finding = numbers.findIndex(value => value === num)
//     // console.log(finding);
//     return finding
// })





// // setTimeout(() => {
// //     console.log('hunterxhunter');
// // }, 2000);


// let i = 0

// const timer = setInterval(() => {
//     i++
//     console.log('hunterxhunter');

//     if (i > 4) {
//         clearInterval(timer)
//     }


// }, 2000);


// // console.log('Starting point: ' + numbers);
// // console.log(mappedNumbers);


// // const combine = combined.map(
// //     function x() {
// //         const conc = combine.concat(...items[])
// //     }
// // )

// // console.log(combine);

const numbers = [1,2,3,4,5,6,7]
const filtering = numbers.filter(number => number >5 )

const mappedNumbers = numbers.map(val => ({num: val}));

const initialValue = 0
const reduced = numbers.reduce((sum, currentValue)=>{
    console.log({sum});
    console.log({currentValue});
    return sum + currentValue
}, initialValue)

console.log(reduced);