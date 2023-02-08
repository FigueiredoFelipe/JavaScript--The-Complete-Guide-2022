const prices = [10.99, 5.99, 3.99, 6,59]
const tax = 0.19
const taxAdjustedPrices = []

// console.log(prices);
// console.log(tax);
// console.log(taxAdjustedPrices);

// for (const price of prices){
//     taxAdjustedPrices.push(price + 1*tax)
// }

// console.log(prices);
// console.log(tax);
// console.log(taxAdjustedPrices);

prices.forEach((price, index, prices)=>{
    const priceObj = { index: index, taxAdjustedPrices: price * (1 + tax)}
    taxAdjustedPrices.push(priceObj)
})

console.log(prices);
console.log(taxAdjustedPrices);
