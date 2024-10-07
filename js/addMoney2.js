document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById2('input-add-money');
    const pinNumber = getInputFieldValueById2('input-pin-number');

    // Validating if its a Not A Number, if so then should return and end there.
    if(isNaN(addMoney)){
        alert('Cannot add money.')
        return;    //we used return so it doesn't move forward and make any changes.
    }

    // Validating if the pin is correct then do the following - (is it a wrong way to validate pin)
    if(pinNumber === 123){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        
        document.getElementById('account-balance').innerText = newBalance;

        // add to Transaction History --> the ${} allows to show the amount in transaction.
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
        console.log(p);

        // should be a common function but we are doing this way for now.
        document.getElementById('transaction-container').appendChild(p);

    }
    else{
        alert('Failed to add money!')
    }

})