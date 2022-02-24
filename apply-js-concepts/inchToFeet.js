function inchToFeet(inches){
    var feet = inches/12;
    return feet;
}
var myRuselt = 2010;
var feet = inchToFeet(myRuselt);
console.log('myRuselt :', feet);

var myInches  = 132;
var feet  = myInches / 12;
console.log(feet);

var dadaInches  = 456545454;
var feet  = inchToFeet(dadaInches);
console.log('dadi result:', feet);

var nanaInches  = 1504242;
var feet  = inchToFeet(nanaInches);
console.log(feet);


function mileTokilometer(miles){
    var kilometer = miles *1.60934;
    return kilometer;
}
var basaToSchool = 3;
var kilometer = mileTokilometer(basaToSchool);
console.log('amer basa thaka school', kilometer, 'kM');