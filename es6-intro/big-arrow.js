const add = (num1, num2)=> num1+ num2;
const sum = add(22,90);

const multiply = (num1, num2, num3) => num1*num2*num3;
const result = multiply(1,2,3);

const fiveTimes = (num) => num*5;
const output = fiveTimes(10);


const getName = () => 'Brandon Smith';
const name = getName();


const doMath = (x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    const output = result* 5;
    return output;
}
const total = doMath(12,5);
console.log(total);


console.log(sum);
console.log(result);
console.log(output);
console.log(name);