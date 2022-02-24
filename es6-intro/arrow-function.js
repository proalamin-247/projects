// function declaration
function add(num1, num2){
    // const sum = num1+ num2;
    return num1+ num2;
}

// function expression
const add2 = function add2(num1, num2){
    return num1+num2;
}

// function expression (anonymous)
const add3 = function (num1, num2){
    return num1+num2;
}

// arrow-function
const add4 = (num, num2) => num1+ num2;



const sum1 = add(17, 15);
const sum2 = add2(15, 17);
const sum3 = add3(15, 17);
const sum4 = add3(15, 17);
console.log(sum1, sum2, sum3, sum4);

const y = x => x*x;
const z = y(5);
console.log(z);

const myFunc =() => console.log('Nayok!');