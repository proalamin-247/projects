/* ---------- 1 no problem (anaToVori) solution START ---------- */
// ana to vori

function anaToVori(inputAna) {
  let vori = 16; // we know 16 ana = 1 vori OR 1 vori = 16 ana
  if (inputAna < 0 || isNaN(inputAna)) {
    return "Pleae, write correct input or your input is NEGATIV";
  } else {
    inputAna = inputAna / vori;
    return inputAna;
  }
}
let resultVori = anaToVori(16);
console.log(resultVori);
/* ---------- 1 no problem (anaToVori) solution END ---------- */


/* ---------- 2 no problem (pandaCost) solution START ---------- */
// pandaCost

function pandaCost(singaraQuantity, somuchaQuantity, gilapiQuantity) {
  /*
    singara per pis - 7,
    somucha per pis - 10,
    jilapi per pis - 15
   */
  let [singaraPrice, somuchaPrice, gilapiPrice] = [7, 10, 15];
  singaraPrice = singaraQuantity * singaraPrice;
  somuchaPrice = somuchaQuantity * somuchaPrice;
  gilapiPrice = gilapiQuantity * gilapiPrice;

  let totalPrice = singaraPrice + somuchaPrice + gilapiPrice;
  if (singaraQuantity == null || somuchaQuantity == null || gilapiQuantity == null) {
    return "Please write 3 foodQuntity Correct Value OR 0";
  } else if (
    isNaN(singaraQuantity) ||
    isNaN(somuchaQuantity) ||
    isNaN(gilapiPrice)
  ) {
    return "Wrong Input! Please write Products Quantitay (number)";
  } else if (singaraQuantity < 0 || somuchaQuantity < 0 || gilapiQuantity < 0) {
    return "Negative Value Detect! Please write 0 or possitive valu ";
  } else {
    return totalPrice;
  }
}
let totalFoodPrice = pandaCost(1,0,1);
console.log(totalFoodPrice);
/* ---------- 2 no problem (pandaCost) solution END ---------- */


/* ---------- 3 no problem (picnicBudget) solution START ---------- */
//picnicBudget

function picnicBudget(personQuantiry) {
  /* condition - 
    1-100 per person cost - 5000,
    101-200 per  person cost - 4000,
    201+ per person cost - 3000,
    */
  let totalCost = 0;
  if (personQuantiry < 0) {
    return "Negative Value Detect! Please write Order Quantity (possitive valu)";
  } 
  else if (personQuantiry == null) {
    return "Please Input Correct Order Quantity";
  } 
  else if (isNaN(personQuantiry)) {
    return "Wrong Input! Please write Order Quantitay (number)";
  } 
  else {
    if (personQuantiry <= 100) {
      totalCost = personQuantiry * 5000;
      return totalCost;
    } 
    else if (personQuantiry <= 200) {
      package1Cost = 100 * 5000;
      package2Cost = (personQuantiry - 100) * 4000;
      totalCost = package1Cost + package2Cost;
      return totalCost;
    } 
    else {
      package1Cost = 100 * 5000;
      package2Cost = 100 * 4000;
      package3Cost = (personQuantiry - 200) * 3000;
      totalCost = package1Cost + package2Cost + package3Cost;
      return totalCost;
    }
  }
}
let totalFoToPicnic = picnicBudget(201);
console.log(totalFoToPicnic);
/* ---------- 3 no problem (picnicBudget) solution END ---------- */


/* ---------- 4 no problem (oddFriend) solution START ---------- */

// oddFriend
function oddFriend(allFriends) {
  if (typeof allFriends != "object") {
    return "Hey! this is object not an array. Please passing an array of friends.";
  } else if (typeof allFriends == "string") {
    return "Wrong Input! Please write string input.";
  }
  let friend = "";
  for (let i = 0; i < allFriends.length; i++) {
    const element = allFriends[i];
    if (element.length % 2 != 0) {
      friend = element;
      break;
        
    }
  }
  return friend;
}

let allFriends = [
  "hadi",
  "alamin",
  "salam",
  "sohan",
  "riyad",
  "halud",
  "salam",
];
console.log(oddFriend(allFriends));
/* ---------- 4 no problem (oddFriend) solution END ---------- */
