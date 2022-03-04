/* Falsy:
false
0 is falsy 
empty string
undefind
null
NaN


----------

Truthy:
true
any number (positive or negative number)
any string inculdong single whitespace , '0', 'false'
emty array []
empty object {}
anything else that is not falsy will be truthy

*/

let x = {};
console.log('value of x', x)

// const x = "";
if(x){
    console.log('truthy')
}
else{
    console.log('falsy')
}