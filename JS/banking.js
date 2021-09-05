// ********** Deposit Button section **********
document.getElementById('deposit-button').addEventListener('click', function () {
    // deposit input 
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;
    const userDepositInput = parseFloat(depositValue);
    depositInput.value = '';
    
    // deposit balance update
    const preDepositBalance = document.getElementById('total-deposit');
    const newDepositBalance = preDepositBalance.innerText;
    const depositBalance = parseFloat(newDepositBalance);
    if (userDepositInput > 0){
        preDepositBalance.innerText = depositBalance + userDepositInput;
    };
    
    // total balance update 
    const totalBalance = document.getElementById('total-balance');
    const newBalance = totalBalance.innerText;
    const previousBalance = parseFloat(newBalance);
    if(userDepositInput > 0){
        totalBalance.innerText = previousBalance + userDepositInput;
    };    
});

// ********** Withdraw Button section **********
document.getElementById('withdraw-button').addEventListener('click', function(){
    // withdraw input 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const userWithdrawInput = parseFloat(withdrawValue);
    withdrawInput.value = '';

    // withdraw balance update 
    const preWithdrawBalance = document.getElementById('total-withdraw');
    const newWithdrawBalance = preWithdrawBalance.innerText;
    const withdrawBalance = parseFloat(newWithdrawBalance);
    // if(userWithdrawInput > 0 && userWithdrawInput < previousBalance){
    //     preWithdrawBalance.innerText = withdrawBalance + userWithdrawInput;
    // }
    
    // total balance update 
    const totalBalance = document.getElementById('total-balance');
    const newBalance = totalBalance.innerText;
    const previousBalance = parseFloat(newBalance);

    if(userWithdrawInput > 0 && userWithdrawInput < previousBalance){
        preWithdrawBalance.innerText = withdrawBalance + userWithdrawInput;
    };
    if(userWithdrawInput > 0 && userWithdrawInput < previousBalance){
        totalBalance.innerText = previousBalance - userWithdrawInput;
    };     
})