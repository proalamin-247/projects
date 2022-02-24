var computer ={
    price: 70000,
    storage: '250gb',
    processor: 'intel core i5',
    ram: '16gb',
    color: 'black',
}

// console.log(computer);
console.log(computer.color);

console.log(computer['ram']);

var computerProcessor = computer.processor;
console.log(computerProcessor);

//set a object property value 
// computer.price = 65000;
// console.log(computer);

//different ways to seta value of an object property
computer.price= 64000;  // 1 no way

computer['price'] = 66000; // 2 no way

var priceProperty = 'price'; // 3 no way
computer[priceProperty] = 65000;

console.log(computer);