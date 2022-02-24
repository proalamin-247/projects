function getInputValue(inputfiledId) {
    const inputField = document.getElementById(inputfiledId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
function getInnerTextValue(fielId){
    const fielTag = document.getElementById(fielId);
    const fielIdValueInText = fielTag.innerText;
    const value = parseFloat(fielIdValueInText);
    return value;
}

function updateTotal(texftiledId, getInputamount) {
    /* const totalTag = document.getElementById(texftiledId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText); */
    
    const previousTotal = getInnerTextValue(fielId);
    const newTotal = previousTotal + getInputamount;
    document.getElementById(texftiledId).innerText = newTotal;
    return newTotal;
}

function updatereaminBalance(getInputAmount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const balanceText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceText);
    let newBalance;
    if (isAdding ==  true) {
        newBalance = previousBalance + getInputAmount;
    }
    else {
        newBalance = previousBalance - getInputAmount;
    }
    balanceTag.innerText = newBalance;

}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputamount = getInputValue('deposit-input');
    if (inputamount > 0) {
        updateTotal('deposit-total', inputamount);
        updatereaminBalance(inputamount, true);
    }
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const inputamount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total')
    if (inputamount > 0 && inputamount <= balance) {
        updateTotal('withdraw-total', inputamount);
        updatereaminBalance(inputamount, false);
    }
})