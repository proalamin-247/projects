const numbers = [4, 5, 8, 20];
const output2 = [];

/* function doubleOld(number){
    return number*2;
} */

const doubleIt = number => number * 2;

// for(const number of numbers){
//     const result = doubleIt(number);
//     output2.push(result);
// }
// console.log(output2);


// 1. loop through each element
// 2. element diya function ke call korsi
// 3. result ka akta array er moddhe push korchi

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
console.log(output);

const squares = numbers.map(x=>x/2);
console.log(squares);