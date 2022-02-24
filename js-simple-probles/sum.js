let numbers = [44,55,66,77,88,99];
let sum = 0;

for (var i=0; i<numbers.length; i++){
    let element= numbers[i];
    sum = sum + element;
    // sum = sum+ element;
}
console.log(sum);


function arratTotal(numbers){
    let sum = 0;
    for(let i = 0; i< numbers.length; i++){
        let element= numbers[i];
        sum = sum + element;
        // return sum;         //এখানে রিটার্ন করা যাবে না 
    }
    return sum;
}

const total = arratTotal(numbers);
console.log(total);