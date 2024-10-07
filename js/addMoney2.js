document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById2('input-add-money');
    const pinNumber = getInputFieldValueById2('input-pin-number');

    if(pinNumber === 123){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money!')
    }

})