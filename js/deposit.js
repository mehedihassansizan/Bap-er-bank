document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInputFiled = document.getElementById('input-deposit');
    const depositInputFiledValue = depositInputFiled.value;
    const numberTypeDepositValue = parseFloat(depositInputFiledValue);
    
    const depositMainElement = document.getElementById('deposit-total');
    const previousDeposit = depositMainElement.innerText;
    const numberPreviousDeposit = parseFloat(previousDeposit);

    const currentDeposit = numberPreviousDeposit + numberTypeDepositValue;
    depositMainElement.innerText= currentDeposit;

    const balanceElement = document.getElementById('balance-total');
    const balanceElementString = balanceElement.innerText;
    const numberBalanceElement = parseFloat(balanceElementString);

    const mainTotalBalance = numberTypeDepositValue+ numberBalanceElement;
    balanceElement.innerText = mainTotalBalance;

    depositInputFiled.value = '';
})