class TeamMember{
    name;
    designation ='Support Web Dev';
    address= 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember{
    groupSupportTime;
    constructor(name, address, time){
        super(name, address)
        this.groupSupportTime= time;
    }
    startSession(){
        console.log(this.name, 'start support session')
    }
}

class StudentCare extends TeamMember{

    bulidARoutine(){
        console.log(this.name, 'Bulid a routine for', student)
    }
}

class NeptuneDev extends TeamMember{
    codeEditor;
    constructor(name, address,editor){
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'release app version', version)
    }
}

const aamir = new Support('amir khan', 'bd', 11);
const salman = new Support('solaiman khan', 'dubai', 4);
const saruk = new Support('SRK khan', 'India', 11);
// aamir.startSession();
// salman.startSession();
// console.log(aamir);
// console.log(salman);
// console.log(saruk);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(alia);

const ash = new NeptuneDev('ash', 'Delli', 'Android Studio');
ash.releaseApp('1.4.5');
// console.log(ash);
