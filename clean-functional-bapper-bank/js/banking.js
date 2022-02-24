// handle deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount deposited
    const depositInput =  document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmmount = parseFloat(newDepositText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDeposiText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDeposiText);

    const newDeposittotal = previousDepositAmount+ newDepositAmmount ;
    depositTotal.innerText = newDeposittotal;


    // update account balance
    const balanceTotal= document.getElementById('balance-total');
    const previousAmmountText = balanceTotal.innerText;
    const previousBalacnceAmount = parseFloat(previousAmmountText);

    const newBalanceTotal = previousBalacnceAmount + newDepositAmmount;
    balanceTotal.innerText = newBalanceTotal;

    
    // clear the deposit input filed
    depositInput.value= '';
})


// handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get the ammount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmmount = parseFloat(newWithdrawText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmmount = parseFloat(previouswithdrawTotalText);

    const newWithdrawtotal = newWithdrawAmmount + withdrawTotalAmmount;
    withdrawTotal.innerText = newWithdrawtotal;

    // upadteBalance
    const balanceTotal= document.getElementById('balance-total');
    const previousAmmountText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousAmmountText);

    const updateBalance= newBalanceTotal - newWithdrawAmmount;
    balanceTotal.innerText = updateBalance;

    // clear the withdraw input filed
    withdrawInput.value = '';
})
