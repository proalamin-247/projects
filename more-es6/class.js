class Support{
    name;
    designation ='Support Web Dev';
    address= 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start support session')
    }
}

const aamir = new Support('amir khan', 'bd');
const salman = new Support('solaiman khan', 'dubai');
const saruk = new Support('SRK khan', 'India');
aamir.startSession();
salman.startSession();
// console.log(aamir);
// console.log(salman);