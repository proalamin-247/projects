/* ---------- 1 no problem (seerToMon) solution START ---------- */
// seerToMon
function seerToMon(mySeer) {
  let mon = 40; // we know 1 mon = 40 seer OR 40 seer = 1 mon
  if (mySeer < 0 || isNaN(mySeer)) {
    return "Write correct Input OR This Negative value";
  } else {
    // var resultMon = mySeer / mon;
    // return resultMon;
    mySeer /= mon;
    return mySeer;
  }
}
let resultMon = seerToMon(120);
console.log(resultMon);
/* ---------- 1 no problem (seerToMon) solution END ---------- */


/* ---------- 2 no problem (totalSales) solution START ---------- */
//totalSales
function totalSales(shirtQuantity, pantQuantity, showQuantity) {
  //Price to Products (shirtPrice, pantPrice, shoePrice)
  /* shirtPrice = 100,
    pantPrice = 200,
    shirtPrice = 500, */
  let [shirtPrice, pantPrice, shoePrice] = [100, 200, 500];
  //Per product price * order prodects = total Prodects price
  shirtPrice *= shirtQuantity;
  pantPrice *= pantQuantity;
  shoePrice *= showQuantity;
  //total price = total order all products
  let totalPrice = shirtPrice + pantPrice + shoePrice;
  if (shirtQuantity == null || pantQuantity == null || showQuantity == null) {
    return "Please Input Correct Value OR 0";
  } else if (
    isNaN(shirtQuantity) ||
    isNaN(pantQuantity) ||
    isNaN(showQuantity)
  ) {
    return "Wrong Input! Please write Products Quantitay (number)";
  } else if (shirtQuantity < 0 || pantQuantity < 0 || showQuantity < 0) {
    return "Negative Value Detect! Please write 0 or possitive valu ";
  } else {
    return totalPrice;
  }
}
/*
    totalYourShopingPrice :-
    first input shirtQuantity,
    second input pantQuantity,
    third input shoeQuantity
    */
let totalYourShopingPrice = totalSales(-10);
console.log(totalYourShopingPrice);
/* ---------- 2 no problem (totalSales) solution END ---------- */


/* ---------- 3 no problem (deliveryCost) solution START ---------- */
//deliveryCost
function deliveryCost(orderQuantity) {
  let totalFee = 0;
  if (orderQuantity < 0) {
    return "Negative Value Detect! Please write Order Quantity (possitive valu)";
  } else if (orderQuantity == null) {
    return "Please Input Correct Order Quantity";
  } else if (isNaN(orderQuantity)) {
    return "Wrong Input! Please write Order Quantitay (number)";
  } else {
    if (orderQuantity <= 100) {
      totalFee = orderQuantity * 100; // firstPackage (1-100)
      return totalFee;
    } else if (orderQuantity <= 200) {
      let firstPackage = 100 * 100;
      let otherPackage = (orderQuantity - 100) * 80;
      totalFee = firstPackage + otherPackage; // secondPackage (101-200)
      return totalFee;
    } else {
      let firstPackage = 100 * 100;
      let secondPackage = 100 * 80;
      let otherPackage = (orderQuantity - 200) * 50;
      totalFee = firstPackage + secondPackage + otherPackage; // thirdPackage (201+)
      return totalFee;
    }
  }
}
let totalDeliveryFee = deliveryCost(1445);
console.log(totalDeliveryFee);
/* ---------- 3 no problem (deliveryCost) solution END ---------- */


/* ---------- 4 no problem (perfectFriend) solution START ---------- */
//perfectFriend
function perfectFriend(friends) {
  if (typeof friends != "object") {
    return "Hey! this is object not an array. Please passing an array of friends.";
  } else if (typeof friends == "string") {
    return "Wrong Input! Please write string input.";
  }
  let friend = "";
  for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if (element.length % 2 !=0) {
      friend = element;
      break;
    }
  }
  return friend;
}
const friends = ["hadi", "alamin",'salam', "sohan", "riyad", "hamid", "salam"];
console.log(perfectFriend(friends));
/* ---------- 4 no problem (perfectFriend) solution END ---------- */
