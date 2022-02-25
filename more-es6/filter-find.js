const numbers = [5, 13, 14, 26, 17, 18, 2, 19, 34];
const bigNumbers = numbers.filter(number => number > 20);
const smaillNumbers = numbers.filter(number => number < 10);

// console.log(bigNumbers);
// console.log(smaillNumbers);

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color:'black'},
    {name: 'watch', price: 5000, color:'black'},
    {name: 'sticky Note', price: 150, color:'pink'},
    {name: 'water glass', price: 30, color:'white'}
]

const lowPriceProducts = products.filter(x => x.price < 1000);
const blackProducts = products.filter(x => x.color == 'black');
const firstblackProducts = products.find(x => x.color == 'black');
const simillarPrice = products.find(x => x.price == 5000);

// console.log(lowPriceProducts);
// console.log(blackProducts);

console.log(simillarPrice);


// even number 
const evenNumbers = numbers.filter(x => x % 2 == 0);
console.log(evenNumbers);

// odd number 
const oddNumbers = numbers.filter(x => x % 2 != 0);
console.log(oddNumbers);