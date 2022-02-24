function addTwoNumbers(Number1, Number2){
    console.log('ai 2 ta zog kar', Number1, Number2);
    var total= Number1 +Number2;
    return total;
}
var sonkha1 = 10;
var sonkha2 = 20;
var result = addTwoNumbers(sonkha1, sonkha2);
console.log(result);


// multiply
function multiplyTwoNumbers(num1, num2){
    var result = num1* num2;
    return result;
}

var total = multiplyTwoNumbers(5, 7);
console.log(total);

//biyog
function biyogTwoNumbers(num1, num2){
    var result = num1- num2;
    return result;
}
var biyogFal = biyogTwoNumbers(10, 3);
console.log('boyog Fal', biyogFal);

//vagFol
function vagTwoNumbers(num1, num2){
    var result = num1 / num2;
    return result;
}

var vagFol = vagTwoNumbers(15, 3);
console.log('vagFol', vagFol);
