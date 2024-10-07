console.log('cash out file')

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById2('input-cash-out');
    const pinNumber = getInputFieldValueById2('input-cash-out-pin');

    if(pinNumber === 123){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;   
    }
    else{
        alert('Wrong Pin entered. Try again later.')
    }
})

