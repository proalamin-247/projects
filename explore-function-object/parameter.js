function bringsSingara(taka){
    console.log('singra kinar jannow disa-', taka , 'taka');
    console.log('mama garom singra dan', taka , 'taker');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    console.log('singara dam 10 tk per pis');
    return singaraQuantity;
}

var money = 250;
var singra = bringsSingara(money);
console.log('ai nan apner', singra, 'ta singara');
