// console.log('add money file added');

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    console.log('add money button clicked');

    //---> Calling a function from another js file called utilities.js
    // getInputFieldValueById();

    // Calling a function from utilities.js file and saving it in a variable
    // const addMoney = getInputFieldValueById();
    // console.log('add money value', addMoney);

    // Instead of doing this way the long way and repeating yourself do the way in the next one.
    // const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumber = parseFloat(addMoney);
    //<---


    // Here we called the function from utilities.js file and added the value for the parameter and saved the return value in a variable.
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add money with parameter', addMoney, pinNumber);


})
