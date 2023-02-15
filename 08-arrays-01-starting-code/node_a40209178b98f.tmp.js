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


let i = 0

const timer = setInterval(() => {
    i++
    console.log('hunterxhunter');

    
    
}, 2000);

if (i>4){
    clearInterval(timer)
}

// console.log('Starting point: ' + numbers);
// console.log(mappedNumbers);


// const combine = combined.map(
//     function x() {
//         const conc = combine.concat(...items[])
//     }
// )

// console.log(combine);