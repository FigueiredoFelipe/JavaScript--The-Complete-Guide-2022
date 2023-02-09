// const prices = [10.99, 5.99, 3.99, 6,59]
// const tax = 0.19

// const taxAdjustedPrices = prices.map((price, index, prices) => {
//     const priceObj = {index, taxAdjustedPrices: price * (1 + tax)}
//     return priceObj
// })

// console.log(prices);
// console.log(taxAdjustedPrices);



// function transformToObjects(numberArray) {
//     // Todo: Add your logic
//     return // should return an array of objects
// }





// const solution = numbers.map((number, index, numbers) =>{
//     const result = {number, index, numbers}
//     return result
// })

// console.log(solution);









// function transformToObjects(numberArray) {
//     const numberArray = [1, 2, 3]

//     return numberArray
//     // Todo: Add your logic
//     // should return an array of objects
// }

// console.log( numberArray);










// const input = [1, 2, 3]

// transformToObjects(input)

// function transformToObjects(n) {
//     const newArray = []
//     n.map((value)=>{
//         const response = transformToObjects(value)
//         newArray.push(response)
//     })
//     const result = {value: n}
//     return result
// }




// **************

// const numbers = [1, 2, 3]

// const test = numbers.map((number, index, numbers) => {
//         const numberArray = {val: number}
//         console.log(numberArray);
//         return numberArray
//     })
    
//     console.log(test);
    
//     ***************



// const numberArray = [1, 2, 3]

// numberArray.map(function transformToObjects(numberArray) {
//     const numberArray = {val: number}
//     console.log(numberArray);
//     return numberArray
// })

// console.log(numberArray);


// function transformToObjects(numberArray) {
//         return numberArray.map(function(val) {
//         return {val: val};
//     });
// }

function transformToObjects(numberArray) {
    let transformedArray = numberArray.map(function(val) {
        return {val: val};
    });
    console.log("Input Array: ", numberArray);
    console.log("Transformed Array: ", transformedArray);
    return transformedArray;
}

let inputArray = [1, 2, 3];
let result = transformToObjects(inputArray);