'use strict';

const inputField = document.querySelector('.input--field');
const btnGenerate = document.querySelector('.btn--generate');
const btnCopy = document.querySelector('.btn--copy');

let password;

let randomPassKey = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const passwordLength = 9;

const passwordGenerator = function() {
    password = ' ';
    for (let i = 0; i <= passwordLength; i++) {
        password += randomPassKey.charAt(Math.floor(Math.random() * randomPassKey.length));
    }
    inputField.value = `${password}`;
};


// console.log(btnGenerate);
btnGenerate.addEventListener('click', function (e) {
   e.preventDefault()
   passwordGenerator();
});



btnCopy.addEventListener('click', function () {

    if (inputField.value === password) {
        navigator.clipboard.writeText(password).then(() => {
            alert(`Your Password ${password} has been copied successfully to your clipboard`)
    
            inputField.value = '';
        }, () => {
            alert('Failed to Copy Passeord to click borad')
        });
    } else {
        alert('Click GENERATE, to create a random password')
    }

});