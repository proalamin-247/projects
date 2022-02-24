function isLeepYear(year){
    /* if(year % 4 == 0){ */
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }
    else{
        return false;
    }
}
var myBornYear = 2001;
var okYear = isLeepYear(myBornYear);
console.log(okYear); 

const yourLeepYear = 2100;
const uYear = isLeepYear(yourLeepYear);
console.log(uYear);