// var i = 0;

// while(i < 10){
//     console.log(i);
//     if(i == 5){
//         break;
//     }
//     i++;
// }

// for (var i= 0; i<10; i++ ){
//     console.log(i);
//     if(i==4){
//         break;
//     }
// }


var numbers = [65, 34, 104, 64, 90, 45 , 84 ,35];

for (var i =0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 80){
        break;
    }
    console.log(number);
}

for (var i =0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 70){
        continue;
    }
    console.log(number);
}