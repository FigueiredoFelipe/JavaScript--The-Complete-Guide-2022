const numbers = [1, 2, 3, 4, 5, 6]
const testing = ['test']
const combined = [[1, 2, 3][4, 5, 6]]

const mappedNumbers = numbers.map(function named(num) {
    const finding = numbers.findIndex(value => value === num)
    // console.log(finding);
    return finding
})

setTimeout(() => {
    console.log('hunterxhunter');
}, 2000);

setInterval(() => {
    console.log('de 3 em 3');
}, 3000);




// console.log('Starting point: ' + numbers);
// console.log(mappedNumbers);


// const combine = combined.map(
//     function x() {
//         const conc = combine.concat(...items[])
//     }
// )

// console.log(combine);