function inputField(inputId){
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const userInput = parseFloat(inputValue);
    input.value = '';
    return userInput;
};

function inputUpdate(updateId, userInput){
    const preUpdateBalance = document.getElementById(updateId);
    const newUpdateBalance = preUpdateBalance.innerText;
    const updateBalance = parseFloat(newUpdateBalance);
    if (userInput > 0){
        preUpdateBalance.innerText = updateBalance + userInput;
    };
};

function balanceField(userInput, isAdd){
    const totalBalance = document.getElementById('total-balance');
    const newBalance = totalBalance.innerText;
    const previousBalance = parseFloat(newBalance);
    if(isAdd == true && userInput > 0){
        totalBalance.innerText = previousBalance + userInput;
    }
    else if(isAdd == false && userInput > 0 && userInput < previousBalance){
        totalBalance.innerText = previousBalance - userInput;
    }
    return previousBalance; 
}


// ********** Deposit Button section **********
document.getElementById('deposit-button').addEventListener('click', function () {
    const userInput = inputField('deposit-input');
 
    inputUpdate('total-deposit', userInput);

    balanceField(userInput, true);
});

// ********** Withdraw Button section **********
document.getElementById('withdraw-button').addEventListener('click', function(){
    const userInput = inputField('withdraw-input');

    if(userInput < balanceField()){
        inputUpdate('total-withdraw', userInput)
    };
    
        balanceField(userInput, false);     
});