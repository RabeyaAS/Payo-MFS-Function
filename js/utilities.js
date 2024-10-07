/**
 * Common Shared Functions here
 *   
*/ 

// instead of doing it this way over and over 
// function getInputFieldValueById(){
//     console.log('will get value by id');

//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }


// Do this way as it can be applied and used many times
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;

}


