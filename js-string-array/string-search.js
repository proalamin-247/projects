const products = [
    'hp laptop',
    'Xiamoi poco m2 pro phone',
    'Razer Mouse LapTOp',
    'Fantech keyboard phone',
    'hp a100 Bluetooth speaker',
    'haylou w1 earbuds laptop',
    'DJI gimbale',
    'hp more gadget'
];

const searching = 'HP';

// indexOF
const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product);
    }
}
// console.log(output);

// includes
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        // output.push(product);
    }
}
// console.log(output);

// startWith
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);
