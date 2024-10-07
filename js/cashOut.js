console.log('cash out file')

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById2('input-cash-out');
    const pinNumber = getInputFieldValueById2('input-cash-out-pin');

    // Validating if it is Not A Number
    if(isNaN(cashOut)){
        alert('Failed to Cash Out.');
        return;
    }


    // Validating if the pin is correct then do the following - (is it a wrong way to validate pin)
    if(pinNumber === 123){
        const balance = getTextFieldValueById('account-balance');

        // Stopping and Warning that you are unable to cash out money as you don't have enough balance.
        if(cashOut > balance){
            alert('You do not have enough money to cash out');
            return;
        }

        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;
        
        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} Withdraw. New Balance ${newBalance}</p>
        `
        
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Wrong Pin entered. Try again later.')
    }
})

