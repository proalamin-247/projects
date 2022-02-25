const fish={
    id: 58, name: 'king hilsha', price: 9000, phone: '0187923324', address:'Chadpur', dress:'golden silver'
}

/* const phone = fish.phone;
const price = fish.price;
 */
const {id, phone, dress, price, address}= fish

// console.log(fish.phone);
// console.log(phone, dress);
// console.log(price);


const company ={
    name: 'GP',
    ceo:{id:1, name: 'ajmol', food: 'fuchka'},
    web: {work: 'web development', employee:22, framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
}

// const work = company.web.work;
// const framework= company.web.framework;

const {work, framework}=company.web;
const {food, name} = company.ceo;
const {first, second, third}= company.web.tech;

console.log(work);
console.log(first);