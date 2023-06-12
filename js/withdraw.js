document.getElementById('withdraw-btn').addEventListener('click', function (){
    const withdrawInputFiled = document.getElementById('input-withdraw');
    const withdrawInputFiledStringValue = withdrawInputFiled.value;
    const numberTypeWithdrawValue = parseFloat(withdrawInputFiledStringValue);
    withdrawInputFiled.value = '';
    
    
    const withdrawElement = document.getElementById('total-withdraw');
    const stringTypeWithdrawElement = withdrawElement.innerText;
    const numberTypeWithdrawElement = parseFloat(stringTypeWithdrawElement);
    
    const nowBalanceElement = document.getElementById('balance-total');
    const stringBalanceElement = nowBalanceElement.innerText;
    const numberBalanceElement = parseFloat(stringBalanceElement);
    
    if (numberTypeWithdrawValue > numberBalanceElement) {
        alert('Tumer ato taka nai');
        return;
    }
    const currentWithdraw = numberTypeWithdrawValue + numberTypeWithdrawElement;
    withdrawElement.innerText = currentWithdraw;

    const currentBalance  = numberBalanceElement - numberTypeWithdrawValue;
    nowBalanceElement.innerText = currentBalance;


})