/*
chariWood = 3ft/char;
tableWood = 10cft/table
bedWood = 50cft/bed
 */

function woodCalculator(chairQuntity, tableQuntity, bedQuntity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWoodQuntity = chairQuntity*perChairWood;
    const tableWoodQuntity = tableQuntity*perTableWood;
    const bedWoodQuntity = bedQuntity*perBedWood;

    const totalWood = chairWoodQuntity+ tableWoodQuntity+ bedWoodQuntity;
    return totalWood;
}

const myFurnicher = woodCalculator(8, 2,2);
console.log(myFurnicher);