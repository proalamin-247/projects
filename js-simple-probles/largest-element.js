function largestElement(numbers){
    let largest = numbers[0];
    for(let i =0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const ages = [21, 22, 23,39,23,32,34];
const oldest = largestElement(ages);
const oldest2 = largestElement([-2, -4, -6, -8]);
console.log(oldest);
console.log(oldest2);


// task 1:- find the lowset element of an array ---
function samllestElement(numbers){
    let largest = numbers[0];
    for(let i =0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < largest){
            largest = element;
        }
    }
    return largest;
}

const agesSmall = [21, 22, 23,39,23,32,34];
const agesSmallest = samllestElement(agesSmall);
const agesSmallest2 = samllestElement([-2, -4, -6, -8]);
console.log(agesSmallest);
console.log(agesSmallest2);