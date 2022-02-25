// JavaScript Object Notation
// JSON

const user = { id: 11, name: 'Gorib amir', job: 'Actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
const shop = {
    name: 'alia store',
    address: 'Ranbir road',
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    profit: 15000,
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);

const premikas = {
    name: 'keka ferdousi',
    cars: { 
        brand: 'toyota' 
    }
}