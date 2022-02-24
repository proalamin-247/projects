const phones = [
    {name: 'Samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'Walton', price: 13000, camera: 7, storage: 4},
    {name: 'Xiomi', price: 27000, camera: 8, storage: 6},
    {name: 'Sony', price: 53000, camera: 17, storage: 64},
    {name: 'Lava', price: 39000, camera: 14, storage: 16},
    {name: 'Oppo', price: 24000, camera: 12, storage: 32}
]

let cheapest = phones[0];
for(const phone of phones){
    //compare price onlly
    if(phone.price < cheapest.price){
        cheapest=phone;
    }
    // console.log(phone);
}
console.log(cheapest);