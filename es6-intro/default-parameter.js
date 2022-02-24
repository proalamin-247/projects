function add(num1, num2=0){

   /*  if(num2 == undefined){
        num2 = 0;
    } */

    /* num2 = num2 || 0; */
    const total = num1+num2;
    return total;
}
const result = add(15,1);
console.log(result);



function fullname (first, last='islam'){
    const name = first+ ' '+ last
    return name
}
const personName = fullname('hadi');
console.log(personName);