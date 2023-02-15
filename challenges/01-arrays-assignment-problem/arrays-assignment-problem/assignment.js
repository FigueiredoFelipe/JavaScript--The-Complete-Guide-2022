const numbers = [04, 20, 90, 60, 89];
const filteredNumbers = Array.from(new Set(numbers.filter(value => value >= 5)));

const mappedNumbers = filteredNumbers.map(val => ({num: val}));

const result = filteredNumbers.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);

console.log('numbers: ' + numbers);
console.log('filteredNumbers: ' + filteredNumbers);
console.log(mappedNumbers);
console.log(result);


function findMax(...args) {
    return [Math.min(...args), Math.max(...args)];
}

const [min, max] = findMax(...filteredNumbers);

console.log('Min: ' + min);
console.log('Max: ' + max);