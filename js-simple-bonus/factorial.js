// 4! =4*3*2*1
/* let factorial = 1;
for(let i= 4; i>=1; i--){
    factorial = factorial*i;
}
console.log(factorial); */

/* function factorial(i){
    return factorial(i--)*i;
}

console.log(factorial(4)); */

const array = [1, 2, 3, 4, 5,6,8, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}