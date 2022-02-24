// Problem 2 :
function pandaCost(singara,samucha,jilapi){
    if(singara < 0 || samucha < 0 || jilapi < 0){
        return 'please enter a positive value';
    }
   //price
    const singraPrice = 7;
    const somuchaPrice = 10;
    const jilapiPrice = 15;
    //quantity
    const singaraQuantity = singraPrice * singara;
    const samuchaQuantity = somuchaPrice * samucha;
    const jilapiQuantity = jilapiPrice * jilapi;
    // cal-total
    const total = singaraQuantity + samuchaQuantity + jilapiQuantity;
    return total;
}
const totalPrice = pandaCost("4",2,2);
console.log(totalPrice);