const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color:'black'},
    {name: 'watch', price: 1500, color:'black'},
    {name: 'sticky Note', price: 150, color:'pink'},
    {name: 'water glass', price: 30, color:'white'}
]

const productsName = products.map(product=> product.name);
const productsPrice = products.map(product=> product.price);
products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productsName);
// console.log(productsPrice);