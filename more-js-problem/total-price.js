const products =[
    {name:'laptop', price: 43000},
    {name: 'shirt', price: 500},
    {name: 'watch', price: 3600},
    {name: 'Kphone', price: 55000}
];

let totalPrice =0;
for(const product of products){
    totalPrice = totalPrice+ product.price;
}
// console.log(totalPrice);

const cart =[
    {name:'laptop', price: 43000, quantity:1},
    {name: 'shirt', price: 500, quantity:5},
    {name: 'watch', price: 3600, quantity:2},
    {name: 'Kphone', price: 55000, quantity:1}
];
let cartTotal =0;
for(const product of cart){
    console.log(product);
    const productTotal = product.price*product.quantity;
    cartTotal = productTotal+ cartTotal;
}
console.log(cartTotal);
