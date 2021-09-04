document.getElementById('login-button').addEventListener('click', function(){
    const emailInput = document.getElementById('input-email');
    const userEmail = emailInput.value;
    emailInput.value = '';

    const passwordInput = document.getElementById('input-password');
    const userPassword = passwordInput.value;
    passwordInput.value = '';

    if(userEmail == 'rashid@gmail.com' && userPassword == '1234'){
        window.location.href = "banking.html";
    }
})