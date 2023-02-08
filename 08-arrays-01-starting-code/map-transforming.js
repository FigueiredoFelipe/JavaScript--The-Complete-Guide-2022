const prices = [10.99, 5.99, 3.99, 6,59]
const tax = 0.19
// const taxAdjustedPrices = []

const taxAdjustedPrices = prices.map((price, index, prices) => {
    const priceObj = {index, taxAdjustedPrices: price * (1 + tax)}
    return priceObj
})

console.log(prices);
console.log(taxAdjustedPrices);
