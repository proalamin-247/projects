const business =17;
const minister = 38;
const army = 26;

/* if (business > minister){
    console.log('Business person er pola is bigger');
}
else{
    console.log('minister aar pola is bigger');
}
 */



/* function findLargest(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}
 */

// const largers = findLargest(34, 54);
// console.log('largers is-', largers);


// compare 3
/* if( business > minister && business > army){
    console.log('business aar pola is bigger');
}
else if( minister > business && minister > army){
    console.log('minister aar pola is bigger');
}
else {
    console.log('army aar pola is bigger');
} */

// var max = Math.max(business, minister, army);
// console.log('largest is-', max);


// sortcart math
function morelargest(value1, value2, value3){
    var sum2 = Math.max(value1, value2, value3);  // max/min =big/small 
    return sum2;
}

var largersResult = morelargest(business, minister, army);
console.log(largersResult);

//tasl 1: creat a functiopn that takes three numbers as input parameter and returs you the largest number of the three

/* function morelargest(value1, value2, value3){
    if(value1 > value2 && value1 > value3){
        return value1;
    }
    else if (value2 > value1 && value2 > value3 ){
        return value2;
    }
    else{
        return value3;
    }
}

var largersResult = morelargest(business, minister, army);

console.log(largersResult); */


// task 2:- write a function to find the smallest of three numbers 
function moresmallest(value1, value2, value3){
    if(value1 < value2 && value1 < value3){
        return value1;
    }
    else if (value2 < value1 && value2 < value3 ){
        return value2;
    }
    else{
        return value3;
    }
}

var smallestResult = moresmallest(business, minister, army);

console.log(smallestResult);